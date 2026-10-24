from flask_login import UserMixin
from werkzeug.security import (
    generate_password_hash,
    check_password_hash
)
from flask_sqlalchemy import SQLAlchemy


# =========================================================
# DATABASE
# =========================================================

db = SQLAlchemy()


# =========================================================
# USER
# =========================================================

class User(UserMixin, db.Model):

    __tablename__ = "users"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    full_name = db.Column(
        db.String(150),
        nullable=False
    )

    email = db.Column(
        db.String(150),
        unique=True,
        nullable=False
    )

    # رقم الموبايل
    phone = db.Column(
        db.String(30),
        nullable=False
    )

    password_hash = db.Column(
        db.String(255),
        nullable=False
    )

    role = db.Column(
        db.String(30),
        default="coach"
    )

    # =====================================================
    # LANGUAGE
    # ar = Arabic
    # en = English
    # =====================================================

    language = db.Column(
        db.String(10),
        default="ar",
        nullable=False
    )

    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )


    # التمارين التي أنشأها المستخدم أو الأدمن
    exercises_created = db.relationship(
        "Exercise",
        backref="creator",
        lazy=True,
        foreign_keys="Exercise.created_by"
    )


    def set_password(self, password):

        self.password_hash = generate_password_hash(
            password
        )


    def check_password(self, password):

        return check_password_hash(
            self.password_hash,
            password
        )


    def __repr__(self):

        return f"<User {self.email}>"


# =========================================================
# SPORT
# =========================================================

class Sport(db.Model):

    __tablename__ = "sports"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    name_ar = db.Column(
        db.String(100),
        nullable=False
    )

    name_en = db.Column(
        db.String(100),
        nullable=False
    )

    slug = db.Column(
        db.String(100),
        unique=True,
        nullable=False
    )

    icon = db.Column(
        db.String(100),
        nullable=True
    )

    is_active = db.Column(
        db.Boolean,
        default=True
    )


    exercises = db.relationship(
        "Exercise",
        backref="sport",
        lazy=True,
        cascade="all, delete-orphan"
    )


    def __repr__(self):

        return f"<Sport {self.name_en}>"


# =========================================================
# EXERCISE
# =========================================================

class Exercise(db.Model):

    __tablename__ = "exercises"

    id = db.Column(
        db.Integer,
        primary_key=True
    )


    # -------------------------
    # BASIC DATA
    # -------------------------

    title = db.Column(
        db.String(200),
        nullable=False
    )

    description = db.Column(
        db.Text,
        nullable=False
    )


    # -------------------------
    # SPORT
    # -------------------------

    sport_id = db.Column(
        db.Integer,
        db.ForeignKey("sports.id"),
        nullable=False
    )


    # -------------------------
    # CLASSIFICATION
    # -------------------------

    category = db.Column(
        db.String(100),
        nullable=True
    )

    goal = db.Column(
        db.String(150),
        nullable=True
    )

    level = db.Column(
        db.String(50),
        nullable=True
    )

    age_group = db.Column(
        db.String(50),
        nullable=True
    )


    # -------------------------
    # TRAINING DETAILS
    # -------------------------

    duration_minutes = db.Column(
        db.Integer,
        nullable=True
    )

    players_count = db.Column(
        db.String(50),
        nullable=True
    )

    equipment = db.Column(
        db.Text,
        nullable=True
    )


    # -------------------------
    # MEDIA
    # -------------------------

    image_filename = db.Column(
        db.String(255),
        nullable=True
    )

    video_url = db.Column(
        db.String(500),
        nullable=True
    )


    # -------------------------
    # PUBLISHING
    # -------------------------

    is_published = db.Column(
        db.Boolean,
        default=True
    )


    # -------------------------
    # CREATOR
    # -------------------------

    created_by = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=True
    )


    # -------------------------
    # DATE
    # -------------------------

    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )


    def __repr__(self):

        return f"<Exercise {self.title}>"


# =========================================================
# SUBSCRIPTION PLAN
# =========================================================

class SubscriptionPlan(db.Model):

    __tablename__ = "subscription_plans"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    name = db.Column(
        db.String(100),
        nullable=False
    )

    price = db.Column(
        db.Float,
        default=0
    )

    duration_days = db.Column(
        db.Integer,
        default=30
    )

    features = db.Column(
        db.Text,
        nullable=True
    )

    is_active = db.Column(
        db.Boolean,
        default=True
    )


    def __repr__(self):

        return f"<SubscriptionPlan {self.name}>"


# =========================================================
# USER SUBSCRIPTION
# =========================================================

class UserSubscription(db.Model):

    __tablename__ = "user_subscriptions"

    id = db.Column(
        db.Integer,
        primary_key=True
    )


    # -------------------------
    # USER
    # -------------------------

    user_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False
    )


    # -------------------------
    # PLAN
    # -------------------------

    plan_id = db.Column(
        db.Integer,
        db.ForeignKey("subscription_plans.id"),
        nullable=False
    )


    # -------------------------
    # DATES
    # -------------------------

    start_date = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )

    end_date = db.Column(
        db.DateTime,
        nullable=True
    )


    # -------------------------
    # STATUS
    # -------------------------

    status = db.Column(
        db.String(30),
        default="active"
    )


    # -------------------------
    # RELATIONSHIPS
    # -------------------------

    user = db.relationship(
        "User",
        backref="subscriptions"
    )

    plan = db.relationship(
        "SubscriptionPlan",
        backref="user_subscriptions"
    )


    def __repr__(self):

        return (
            f"<UserSubscription "
            f"user={self.user_id} "
            f"plan={self.plan_id}>"
        )
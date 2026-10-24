(function () {
    "use strict";

    const language = (window.DETACTICA_LANGUAGE || "ar").toLowerCase();
    if (language !== "en") return;

    const map = {
        "منصة المدربين الذكية": "Smart Coaching Platform",
        "منصة المدرب الذكية": "Smart Coaching Platform",
        "منصة المدرب المتكاملة": "The Complete Coaching Platform",
        "منصة مدربي كرة القدم": "Football Coaching Platform",
        "كل أدواتك التدريبية في مكان واحد": "All Your Coaching Tools in One Place",
        "كل أدواتك التدريبية": "All Your Coaching Tools",
        "في مكان": "in One",
        "واحد": "Place",
        "ابدأ رحلتك التدريبية": "Start Your Coaching Journey",
        "إنشاء حساب جديد": "Create a New Account",
        "إنشاء الحساب": "Create Account",
        "أنشئ حسابك وابدأ في تنظيم التمارين والحصص والفرق.": "Create your account and start organizing exercises, sessions, and teams.",
        "لديك حساب بالفعل؟": "Already have an account?",
        "مرحبًا بعودتك": "Welcome Back",
        "تسجيل الدخول": "Log In",
        "ادخل إلى حسابك للوصول إلى التمارين والحصص والفرق.": "Sign in to access your exercises, sessions, and teams.",
        "البريد الإلكتروني": "Email",
        "كلمة المرور": "Password",
        "اكتب كلمة المرور": "Enter your password",
        "تذكرني": "Remember Me",
        "نسيت كلمة المرور؟": "Forgot Password?",
        "ليس لديك حساب؟": "Don't have an account?",
        "إنشاء حساب جديد": "Create New Account",
        "الاسم بالكامل": "Full Name",
        "مثال: أحمد محمد": "Example: Ahmed Mohamed",
        "6 أحرف على الأقل": "At least 6 characters",
        "8 أحرف على الأقل": "At least 8 characters",
        "حساب آمن ومحمي": "Secure and Protected Account",
        "حفظ التمارين والحصص": "Save Exercises and Sessions",
        "وصول من أي جهاز": "Access from Any Device",
        "خطّط حصصك،": "Plan Your Sessions,",
        "وطوّر فريقك": "and Develop Your Team",
        "باحترافية": "Professionally",
        "مكتبة تمارين كرة قدم، فيديوهات، لوحة تكتيكية، فرق ولاعبون، وتقارير في منصة واحدة.": "Football exercise library, videos, tactical board, teams, players, and reports in one platform.",
        "مكتبة تمارين وفيديوهات، لوحة تكتيكية، تشكيلات، إدارة لاعبين وحصص تدريبية.": "Exercise and video library, tactical board, formations, player management, and training sessions.",
        "تمارين كرة قدم بالفيديو": "Football Exercises with Video",
        "لوحة تكتيكية تفاعلية": "Interactive Tactical Board",
        "إدارة الفرق واللاعبين": "Team & Player Management",

        "المميزات": "Features",
        "الأدوات": "Tools",
        "الباقات": "Plans",
        "لوحة التحكم": "Dashboard",
        "حسابي": "My Account",
        "أهلًا،": "Hello,",
        "ابدأ الآن": "Get Started",
        "كرة القدم": "Football",
        "العودة للرياضات": "Back to Sports",
        "العودة لكرة القدم": "Back to Football",
        "العودة لمركز كرة القدم": "Back to Football Center",
        "العودة لمكتبة التمارين": "Back to Exercise Library",
        "العودة لإدارة التمارين": "Back to Exercise Management",
        "العودة إلى الموقع": "Back to Website",
        "العودة للرئيسية": "Back to Home",
        "الرجوع إلى حسابي": "Back to My Account",

        "خطّط، درّب، وطوّر فريقك": "Plan, Train, and Develop Your Team",
        "بسهولة": "Easily",
        "كل أدوات المدرب في مكان واحد: تمارين جاهزة، تشكيلات، إدارة فرق ولاعبين، لوحة تكتيكية تفاعلية، ومساعد ذكي يساعدك تجهّز حصتك بسرعة.": "All your coaching tools in one place: ready-made exercises, formations, team and player management, an interactive tactical board, and an AI assistant to help you prepare sessions faster.",
        "شاهد لوحة التحكم": "View Dashboard",
        "سهل الاستخدام": "Easy to Use",
        "بدون خبرة تقنية": "No Technical Experience Required",
        "مناسب لكل الرياضات": "Suitable for All Sports",
        "لوحة التخطيط": "Planning Board",
        "الحصة جاهزة": "Session Ready",
        "تم حفظ الخطة بنجاح": "Plan Saved Successfully",
        "اقتراح ذكي": "Smart Suggestion",
        "تمرين مناسب لفريقك": "A Suitable Exercise for Your Team",
        "تمرين جاهز": "Ready Exercises",
        "تشكيلة وخطة": "Formations & Plans",
        "وصول للمنصة": "Platform Access",
        "واجهة عربية بسيطة": "Simple User Interface",
        "لماذا DeTactica؟": "Why DeTactica?",
        "كل ما يحتاجه المدرب، بدون تعقيد": "Everything a Coach Needs, Without the Complexity",
        "واجهة واضحة وسريعة، مصممة للمدربين وليس للمبرمجين.": "A clear, fast interface designed for coaches, not programmers.",
        "حرّك اللاعبين، ارسم التحركات، وأضف الأدوات بسهولة.": "Move players, draw movements, and add training equipment with ease.",
        "تمارين جاهزة": "Ready-Made Exercises",
        "مكتبة كبيرة مصنفة حسب الهدف والعمر ومستوى اللاعبين.": "A comprehensive library organized by objective, age group, and player level.",
        "احتفظ ببيانات الفرق، الحضور، الملاحظات، والتقييمات.": "Manage team information, attendance, notes, and evaluations.",
        "مساعد ذكي": "AI Assistant",
        "يقترح الحصص والتمارين المناسبة بناءً على احتياجك.": "Get session and exercise suggestions based on your training needs.",
        "من الفكرة للتنفيذ": "From Idea to Execution",
        "جهّز حصتك كاملة في دقائق": "Prepare Your Entire Session in Minutes",
        "افتح لوحة جديدة، اختار التمرين، رتب اللاعبين، واحفظ الحصة. كل خطوة واضحة ومباشرة.": "Open a new board, choose an exercise, organize your players, and save the session. Every step is simple and direct.",
        "قوالب جاهزة للحصص": "Ready Session Templates",
        "حفظ واسترجاع الخطط": "Save and Restore Plans",
        "مشاركة الخطة مع فريقك": "Share Plans with Your Team",
        "تقارير ومتابعة الأداء": "Reports & Performance Tracking",
        "صباح الخير": "Good Morning",
        "أهلًا يا كابتن أحمد": "Welcome, Coach Ahmed",
        "الحصص": "Sessions",
        "اللاعبون": "Players",
        "التمارين": "Exercises",
        "الحصص القادمة": "Upcoming Sessions",
        "هذا الأسبوع": "This Week",
        "تمرين لياقة": "Fitness Training",
        "اليوم": "Today",
        "مباراة ودية": "Friendly Match",
        "غدًا": "Tomorrow",
        "اشتراكك": "Your Subscription",
        "باقتك الحالية:": "Current Plan:",
        "إدارة الاشتراك": "Manage Subscription",
        "اختار الباقة المناسبة لك": "Choose the Right Plan for You",
        "ابدأ مجانًا، وطوّر حسابك في أي وقت.": "Start for free and upgrade your account at any time.",
        "عرض الباقات": "View Plans",
        "منصة ذكية تساعد المدربين على التخطيط والتطوير وتحقيق نتائج أفضل.": "A smart platform that helps coaches plan, develop, and achieve better results.",

        "اختار الرياضة": "Choose Your Sport",
        "اختار المجال الذي تريد الوصول إلى تمارينه.": "Choose the sport you want to access and explore its training exercises.",
        "ابدأ في تصفح التمارين والأقسام الخاصة بكرة القدم.": "Explore football exercises and training sections.",
        "سيتم إطلاق هذه الرياضة قريبًا.": "This sport will be available soon.",
        "دخول": "Enter",
        "قريبًا": "Coming Soon",
        "لا توجد رياضات متاحة حاليًا.": "No sports are currently available.",
        "الجيم": "Gym",
        "كرة السلة": "Basketball",
        "الكيك بوكسينج": "Kickboxing",

        "مركز تدريب كرة القدم": "Football Training Center",
        "جهّز حصتك، صمّم التمارين، استخدم التشكيلات الجاهزة، واحفظ كل خططك في مكان واحد.": "Prepare your session, design exercises, use ready formations, and keep all your plans in one place.",
        "اللوحة التكتيكية": "Tactical Board",
        "أضف اللاعبين والحراس والكرات والأقماع والأسهم، وحرّك جميع العناصر على الملعب.": "Add players, goalkeepers, balls, cones, and arrows, and move every element on the pitch.",
        "فتح اللوحة": "Open Board",
        "التشكيلات الجاهزة": "Ready Formations",
        "استخدم تشكيلات مثل 4-3-3 و4-4-2، وافتحها مباشرة داخل اللوحة للتعديل عليها.": "Use formations such as 4-3-3 and 4-4-2 and open them directly on the board for editing.",
        "فتح المكتبة": "Open Library",
        "مكتبة التمارين": "Exercise Library",
        "تصفح التمارين التي يضيفها المدرب أو الأدمن، وشاهد تفاصيل كل تمرين وافتحه على اللوحة التكتيكية.": "Browse exercises added by the coach or admin, view each exercise, and open it on the tactical board.",
        "فتح مكتبة التمارين": "Open Exercise Library",
        "المساعد الذكي": "AI Assistant",
        "اكتب وصف الحصة أو التمرين المطلوب، وسيتم تجهيزه تلقائيًا على اللوحة.": "Describe the session or exercise you need and it will be prepared automatically on the board.",
        "فتح المساعد الذكي": "Open AI Assistant",
        "محفوظاتي": "My Saved Boards",
        "شاهد اللوحات والخطط التي حفظتها، وافتح أي لوحة لتكمل التعديل عليها.": "View your saved boards and plans, then reopen any board to continue editing.",
        "فتح محفوظاتي": "Open Saved Boards",


        "تمرين الاستحواذ 4 ضد 2": "4v2 Possession Drill",
        "أربعة لاعبين يحتفظون بالكرة ضد لاعبين ضاغطين داخل مساحة محددة. الهدف هو تحسين سرعة التمرير والتحرك بدون كرة.": "Four players keep possession against two pressing players inside a defined area. The objective is to improve passing speed and off-the-ball movement.",
        "تمرين التمرير المثلثي": "Triangle Passing Drill",
        "ثلاثة لاعبين في شكل مثلث يتبادلون التمرير مع تغيير المراكز باستمرار. التمرين يركز على دقة التمرير والاستلام والتحرك.": "Three players form a triangle and exchange passes while continuously rotating positions. The drill focuses on passing accuracy, receiving, and movement.",
        "تمرين التسديد بعد المراوغة": "Dribble and Shoot Drill",
        "يمر اللاعب بالكرة بين مجموعة أقماع ثم ينهي الهجمة بتسديدة على المرمى. يهدف إلى تطوير المراوغة والدقة في إنهاء الهجمات.": "The player dribbles through a series of cones and finishes with a shot on goal. The drill develops dribbling and finishing accuracy.",
        "تمرين الضغط العالي 6 ضد 6": "6v6 High-Press Drill",
        "فريق يحاول بناء اللعب من الخلف بينما يقوم الفريق الآخر بالضغط العالي لاستعادة الكرة في أسرع وقت ممكن.": "One team builds from the back while the other applies a high press to regain possession as quickly as possible.",
        "تمرين الإحماء بالكرة": "Ball Warm-up Drill",
        "تمرين إحماء ديناميكي باستخدام الكرة يتضمن الجري الخفيف والتمرير وتغيير الاتجاه والتحرك المستمر.": "A dynamic ball warm-up involving light running, passing, changes of direction, and continuous movement.",
        "كرات - 4 أقماع": "Balls - 4 Cones",
        "كرة - 4 أقماع": "Ball - 4 Cones",
        "كرات - أقماع": "Balls - Cones",
        "كرات - أقماع - مرمى": "Balls - Cones - Goal",
        "كرات - أقماع - صدريات": "Balls - Cones - Bibs",
        "6 لاعبين": "6 Players",
        "3 - 6 لاعبين": "3 - 6 Players",
        "6 - 10 لاعبين": "6 - 10 Players",
        "12 لاعب": "12 Players",
        "8 - 16 لاعب": "8 - 16 Players",
        "حسابك مفعّل على باقة": "Your account is active on the",
        "ويمكنك إدارة الاشتراك أو ترقيته في أي وقت.": "plan. You can manage or upgrade your subscription at any time.",
        "مكتبة المدرب": "Coach Library",
        "جميع التمارين التي يتم نشرها من لوحة الإدارة ستظهر هنا تلقائيًا. اختر التمرين المناسب، شاهد تفاصيله، ثم افتحه على اللوحة التكتيكية.": "All exercises published from the admin panel will appear here automatically. Choose an exercise, review its details, then open it on the tactical board.",
        "ابحث باسم التمرين...": "Search by exercise name...",
        "كل الأهداف": "All Goals",
        "كل الأعمار": "All Ages",
        "كل المستويات": "All Levels",
        "التمارين المتاحة": "Available Exercises",
        "تمرير": "Passing",
        "تسديد": "Shooting",
        "استحواذ": "Possession",
        "مراوغة": "Dribbling",
        "لياقة": "Fitness",
        "إحماء": "Warm-up",
        "دفاع": "Defense",
        "هجوم": "Attack",
        "ضغط": "Pressing",
        "تحولات": "Transitions",
        "مهاري": "Technical",
        "تكتيكي": "Tactical",
        "بدني": "Physical",
        "دفاعي": "Defensive",
        "هجومي": "Attacking",
        "براعم": "Grassroots",
        "ناشئين": "Youth",
        "شباب": "Young Adults",
        "كبار": "Senior",
        "فريق أول": "First Team",
        "مبتدئ": "Beginner",
        "متوسط": "Intermediate",
        "متقدم": "Advanced",
        "غير محدد": "Not Specified",
        "عام": "General",
        "التفاصيل": "Details",
        "فتح على اللوحة": "Open on Board",
        "لا توجد تمارين منشورة حتى الآن": "No published exercises yet",
        "عندما يضيف الأدمن تمرينًا جديدًا وينشره، سيظهر هنا تلقائيًا.": "When the admin adds and publishes a new exercise, it will automatically appear here.",

        "عدد اللاعبين": "Number of Players",
        "مدة التمرين": "Exercise Duration",
        "المدة": "Duration",
        "الهدف": "Goal",
        "المستوى": "Level",
        "شرح التمرين": "Exercise Description",
        "الأدوات المطلوبة": "Required Equipment",
        "لا توجد أدوات محددة لهذا التمرين.": "No specific equipment is required for this exercise.",
        "فيديو توضيحي": "Instructional Video",
        "مشاهدة فيديو التمرين": "Watch Exercise Video",
        "جرّب التمرين على اللوحة": "Try the Exercise on the Board",
        "افتح التمرين على اللوحة التكتيكية لتعديل اللاعبين والكرات والأقماع والحواجز وتجربة التحركات قبل تنفيذ التمرين في الملعب.": "Open the exercise on the tactical board to adjust players, balls, cones, and hurdles, and test movements before running it on the pitch.",
        "فتح الإعداد على اللوحة": "Open Setup on Board",
        "دقيقة": "min",
        "دقائق": "minutes",

        "مكتبة اللوحات الجاهزة": "Ready Board Library",
        "اختار تشكيلًا أو تمرينًا جاهزًا، ثم عدّل العناصر داخل اللوحة التكتيكية. وستظهر هنا أيضًا أي لوحة تحفظها من داخل اللوحة.": "Choose a ready formation or drill, then edit its elements on the tactical board. Any board you save will also appear here.",
        "لوحات DeTactica": "DeTactica Boards",
        "أربع لوحات جاهزة كبداية.": "Four ready boards to get you started.",
        "تشكيل": "Formation",
        "تدريب": "Training",
        "تشكيل 4-3-3": "4-3-3 Formation",
        "تشكيل 4-4-2": "4-4-2 Formation",
        "تشكيل هجومي بثلاثة لاعبين في خط الهجوم.": "An attacking formation with three forwards.",
        "تشكيل متوازن بين الدفاع والوسط والهجوم.": "A balanced formation across defense, midfield, and attack.",
        "استحواذ 4 ضد 2": "4v2 Possession",
        "تدريب لتطوير التمرير السريع والتحرك والضغط.": "A drill to develop quick passing, movement, and pressing.",
        "التمرير المثلثي": "Triangle Passing",
        "لوحاتي المحفوظة": "My Saved Boards",
        "لا توجد لوحات محفوظة حتى الآن.": "No saved boards yet.",
        "حذف": "Delete",

        "صمّم تمرينك الذكي": "Design Your Smart Exercise",
        "اختر متطلبات الحصة التدريبية وسيقوم المساعد بتجهيز اقتراح كامل للتمرين، ثم يمكنك فتح الإعداد مباشرة على اللوحة التكتيكية والتعديل عليه.": "Choose your training-session requirements and the assistant will prepare a complete exercise suggestion. You can then open the setup directly on the tactical board and edit it.",
        "هدف التمرين": "Training Objective",
        "الفئة العمرية": "Age Group",
        "مستوى الصعوبة": "Difficulty Level",
        "مساحة التدريب": "Training Area",
        "عدد الأقماع": "Number of Cones",
        "عدد الكرات": "Number of Balls",
        "اطلب اقتراح التمرين": "Generate Exercise Suggestion",
        "تقسيم اللاعبين": "Player Setup",
        "خطوات التنفيذ": "Execution Steps",
        "مساحة صغيرة": "Small Area",
        "مساحة متوسطة": "Medium Area",
        "مساحة كبيرة": "Large Area",
        "بدون أقماع": "No Cones",
        "كرة واحدة": "1 Ball",
        "كرتان": "2 Balls",
        "لاعبين": "Players",
        "لاعبًا": "Players",
        "لاعب": "Player",

        "أدوات الملعب": "Pitch Tools",
        "عناصر التدريب": "Training Elements",
        "إضافة لاعبين": "Add Players",
        "اختار لون اللاعبين": "Choose Player Color",
        "حارس مرمى": "Goalkeeper",
        "كرة": "Ball",
        "قمع أحمر": "Red Cone",
        "قمع أزرق": "Blue Cone",
        "قمع أصفر": "Yellow Cone",
        "قرص أحمر": "Red Disc",
        "قرص أزرق": "Blue Disc",
        "قرص أصفر": "Yellow Disc",
        "سلم تدريب": "Agility Ladder",
        "حاجز تدريب": "Training Hurdle",
        "حاجز بشري": "Mannequin",
        "رسم سهم": "Draw Arrow",
        "رسم خط": "Draw Line",
        "حجم العنصر": "Item Size",
        "تكبير / تصغير": "Resize",
        "حدد أي عنصر ثم حرّك الشريط لتغيير حجمه.": "Select an item and use the slider to resize it.",
        "محاكاة الحركة": "Movement Simulation",
        "تسجيل حركة العنصر": "Record Movement",
        "تشغيل المحاكاة": "Play Simulation",
        "إعادة البداية": "Reset to Start",
        "مسح كل الحركات": "Clear All Movements",
        "التحكم": "Controls",
        "حفظ في محفوظاتي": "Save to My Boards",
        "إيقاف الإضافة": "Stop Adding",
        "حذف العنصر المحدد": "Delete Selected Item",
        "مسح اللوحة": "Clear Board",
        "صمّم التمرين، غيّر أحجام العناصر، وسجل الحركة ثم شاهد المحاكاة.": "Design your drill, resize elements, record movements, and play the simulation.",
        "اختار أداة من القائمة": "Choose a Tool",
        "الاستخدام:": "How to Use:",
        "اختار أي عنصر من القائمة واضغط على الملعب. يمكنك تحديد العنصر وتغيير حجمه من شريط الحجم. لتسجيل حركة، حدد اللاعب أو الكرة واضغط «تسجيل حركة العنصر»، ثم اسحبه لمكان النهاية. بعدها استخدم «تشغيل المحاكاة».": "Choose an element from the list and click the pitch. Select any item to resize it. To record movement, select a player or ball, click Record Movement, drag it to the end position, then use Play Simulation.",
        "تم إيقاف إضافة العناصر": "Adding items stopped",
        "الأداة المختارة:": "Selected tool:",
        "العنصر المحدد:": "Selected item:",
        "حجم العنصر:": "Item size:",
        "تم تحديد البداية، اضغط على نقطة النهاية": "Start point selected. Click the end point.",
        "تم حذف العنصر": "Item deleted",
        "اختار عنصرًا أولًا.": "Select an item first.",
        "هل تريد مسح اللوحة بالكامل؟": "Clear the entire board?",
        "تم مسح اللوحة": "Board cleared",
        "اللوحة فارغة.": "The board is empty.",
        "اكتب اسم اللوحة:": "Enter a board name:",
        "خطة تدريب جديدة": "New Training Plan",
        "تم حفظ اللوحة ✅": "Board saved ✅",
        "تم فتح:": "Opened:",
        "تعذر العثور على اللوحة الجاهزة": "Could not find the ready board",
        "تعذر العثور على اللوحة المحفوظة": "Could not find the saved board",
        "تم تحميل آخر لوحة محفوظة": "Last saved board loaded",
        "تم إنشاء اللوحة من المساعد الذكي ✨": "Board generated by the AI Assistant ✨",
        "اختار لاعبًا أو كرة أو عنصرًا من الملعب أولًا.": "Select a player, ball, or pitch element first.",
        "اسحب العنصر الآن إلى مكان النهاية": "Drag the item to its end position now",
        "حرّك العنصر إلى مكان مختلف": "Move the item to a different position",
        "تم تسجيل الحركة — يمكنك تسجيل حركة عنصر آخر": "Movement recorded — you can record another item",
        "سجل حركة لاعب أو كرة أولًا.": "Record a player or ball movement first.",
        "جاري تشغيل المحاكاة...": "Playing simulation...",
        "انتهت المحاكاة": "Simulation finished",
        "لا توجد حركة مسجلة.": "No movement has been recorded.",
        "تم الرجوع إلى بداية التمرين": "Returned to the start of the exercise",
        "لا توجد حركات مسجلة.": "No movements have been recorded.",
        "هل تريد مسح جميع الحركات والبدء من جديد؟": "Clear all movements and start again?",
        "تم مسح كل الحركات — يمكنك البدء من جديد": "All movements cleared — you can start again",

        "بيانات الحساب": "Account Information",
        "من هنا يمكنك إدارة حسابك بالكامل.": "Manage your account settings from here.",
        "الاسم": "Name",
        "اللغة": "Language",
        "اختر لغة DeTactica": "Choose your DeTactica language",
        "حفظ اللغة": "Save Language",
        "الاشتراك الحالي": "Current Subscription",
        "السعر": "Price",
        "الحالة": "Status",
        "نشط": "Active",
        "غير نشط": "Inactive",
        "لا يوجد اشتراك": "No Subscription",
        "لم تشترك في أي باقة حتى الآن.": "You are not subscribed to a plan yet.",
        "تغيير أو اختيار الباقة": "Change or Select Plan",
        "سيتم عرض التمارين الخاصة بك هنا.": "Your exercises will appear here.",
        "الدفع": "Payment",
        "لا توجد وسيلة دفع محفوظة.": "No payment method is saved.",
        "سيتم عرض آخر عمليات الدفع هنا.": "Your latest payments will appear here.",
        "اضغط الزر للخروج من الحساب.": "Click the button to log out of your account.",
        "تسجيل الخروج": "Log Out",
        "الرئيسية": "Home",
        "العودة إلى الصفحة الرئيسية لـ DeTactica.": "Return to the DeTactica home page.",

        "اختار الباقة المناسبة": "Choose the Right Plan",
        "يمكنك تغيير باقتك في أي وقت من صفحة حسابك.": "You can change your plan at any time from your account page.",
        "الباقة الحالية": "Current Plan",
        "مجاني": "Free",
        "جنيه / شهر": "EGP / month",
        "أنتِ مشترك في هذه الباقة": "You are subscribed to this plan",
        "اختار الباقة المجانية": "Choose the Free Plan",
        "ترقية إلى هذه الباقة": "Upgrade to This Plan",
        "الأساسية": "Basic",
        "الاحترافية": "Professional",
        "تمارين محدودة، لوحة تحكم أساسية": "Limited exercises, basic dashboard",
        "تمارين أكثر، متابعة الاشتراك، مزايا إضافية": "More exercises, subscription tracking, extra features",
        "كل التمارين، كل الرياضات، مزايا احترافية كاملة": "All exercises, all sports, full professional features",

        "لوحة الإدارة": "Admin Dashboard",
        "مرحبًا بك": "Welcome",
        "لوحة إدارة DeTactica": "DeTactica Admin Dashboard",
        "مدير النظام": "System Administrator",
        "المستخدمون": "Users",
        "إجمالي الحسابات": "Total Accounts",
        "تمرين داخل المنصة": "Exercises on Platform",
        "الرياضات": "Sports",
        "رياضة مضافة": "Sports Added",
        "باقة اشتراك": "Subscription Plans",
        "التقارير": "Reports",
        "الإعدادات": "Settings",
        "إجراءات سريعة": "Quick Actions",
        "إدارة أهم أجزاء المنصة بسهولة": "Manage key areas of the platform easily",
        "إضافة تمرين": "Add Exercise",
        "ارفع تمرينًا جديدًا بصورة أو فيديو.": "Add a new exercise with an image or video.",
        "إضافة رياضة": "Add Sport",
        "أضف قسمًا رياضيًا جديدًا للمنصة.": "Add a new sports section to the platform.",
        "إدارة الباقات": "Manage Plans",
        "عدّل الأسعار ومميزات الاشتراكات.": "Edit prices and subscription features.",
        "أحدث المستخدمين": "Latest Users",
        "آخر الحسابات المسجلة": "Most recently registered accounts",
        "عرض الجميع": "View All",
        "البريد": "Email",
        "الصلاحية": "Role",
        "لا يوجد مستخدمون حتى الآن.": "No users yet.",
        "أحدث التمارين": "Latest Exercises",
        "آخر التمارين المضافة": "Most recently added exercises",
        "بدون تصنيف": "Uncategorized",
        "لا توجد تمارين حتى الآن.": "No exercises yet.",

        "إدارة المحتوى": "Content Management",
        "إدارة التمارين": "Exercise Management",
        "أضف وعدّل وانشر التمارين التي تظهر للمدربين داخل مكتبة DeTactica.": "Add, edit, and publish exercises that appear in the DeTactica coach library.",
        "تمرين جديد": "New Exercise",
        "إجمالي التمارين": "Total Exercises",
        "التمارين المنشورة": "Published Exercises",
        "التمارين المخفية": "Hidden Exercises",
        "التمرين": "Exercise",
        "الرياضة": "Sport",
        "العمر": "Age",
        "الإجراءات": "Actions",
        "منشور": "Published",
        "مخفي": "Hidden",
        "عرض": "View",
        "تعديل": "Edit",
        "إخفاء": "Hide",
        "نشر": "Publish",
        "هل أنت متأكد من حذف هذا التمرين؟": "Are you sure you want to delete this exercise?",
        "إضافة تمرين جديد": "Add New Exercise",
        "أضف بيانات التمرين، وحدد الفئة والهدف والمستوى. عند تفعيل النشر سيظهر التمرين تلقائيًا في مكتبة المدربين.": "Enter the exercise details and select its category, objective, and level. When publishing is enabled, it will automatically appear in the coach library.",
        "البيانات الأساسية": "Basic Information",
        "اسم التمرين": "Exercise Name",
        "اختر الرياضة": "Choose Sport",
        "التصنيف": "Category",
        "اختر التصنيف": "Choose Category",
        "وصف التمرين": "Exercise Description",
        "اشرح فكرة التمرين وطريقة تنفيذه والخطوات المطلوبة...": "Describe the exercise concept, execution method, and required steps...",
        "هذا الوصف سيظهر للمدرب داخل مكتبة التمارين.": "This description will appear to the coach in the exercise library.",
        "تفاصيل التمرين": "Exercise Details",
        "اختر الهدف": "Choose Objective",
        "اختر المستوى": "Choose Level",
        "اختر الفئة العمرية": "Choose Age Group",
        "مدة التمرين بالدقائق": "Exercise Duration in Minutes",
        "الأدوات المطلوبة": "Required Equipment",
        "كرات، أقماع، حواجز...": "Balls, cones, hurdles...",
        "الصور والفيديو": "Images & Video",
        "اسم ملف الصورة": "Image Filename",
        "رابط الفيديو": "Video URL",
        "حالة النشر": "Publishing Status",
        "نشر التمرين الآن": "Publish Exercise Now",
        "سيظهر التمرين للمدربين داخل المكتبة.": "The exercise will appear in the coach library.",
        "حفظ التمرين": "Save Exercise",
        "إلغاء": "Cancel",
        "تعديل التمرين": "Edit Exercise",
        "عدّل بيانات": "Edit the details of",
        "ثم احفظ التغييرات.": "then save your changes.",
        "وصف وشرح التمرين": "Exercise Description",
        "يمكنك تعديل خطوات تنفيذ التمرين بالكامل من هنا.": "You can edit the full exercise execution steps here.",
        "حفظ التغييرات": "Save Changes"
    };

    const keys = Object.keys(map).sort((a, b) => b.length - a.length);

    function translateString(value) {
        if (!value || typeof value !== "string") return value;
        let result = value;
        for (const key of keys) {
            if (result.includes(key)) result = result.split(key).join(map[key]);
        }
        // Numeric UI values that are generated dynamically.
        result = result
            .replace(/(\d+)\s*لاعبين?/g, "$1 Players")
            .replace(/(\d+)\s*دقيقة/g, "$1 min")
            .replace(/(\d+)\s*دقائق/g, "$1 min")
            .replace(/(\d+)\s*أقماع/g, "$1 Cones")
            .replace(/(\d+)\s*قمع/g, "$1 Cones")
            .replace(/(\d+)\s*كرات/g, "$1 Balls")
            .replace(/(\d+)\s*كرة/g, "$1 Balls");

        // Brand protection / cleanup.
        result = result.replace(/DeTactica/gi, "DeTactica").replace(/TACTICA/g, "DeTactica");

        // English mode must never expose Arabic glyphs. Most content is translated
        // above; this is a final safety net for unforeseen database/user-generated text.
        if (/[\u0600-\u06FF]/.test(result)) {
            const trimmed = result.trim();
            if (!trimmed) return result;
            // Preserve surrounding whitespace so layout does not shift.
            const leading = result.match(/^\s*/)[0];
            const trailing = result.match(/\s*$/)[0];
            return leading + "English content" + trailing;
        }
        return result;
    }

    function translateElement(root) {
        if (!root) return;

        if (root.nodeType === Node.TEXT_NODE) {
            const oldValue = root.nodeValue;
            const newValue = translateString(oldValue);
            if (newValue !== oldValue) root.nodeValue = newValue;
            return;
        }

        if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;

        if (root.nodeType === Node.ELEMENT_NODE) {
            if (root.closest && root.closest(".notranslate,[translate='no']")) return;
            ["placeholder", "title", "aria-label"].forEach(attr => {
                if (root.hasAttribute && root.hasAttribute(attr)) {
                    root.setAttribute(attr, translateString(root.getAttribute(attr)));
                }
            });
        }

        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                const p = node.parentElement;
                if (!p) return NodeFilter.FILTER_REJECT;
                if (p.closest("script,style,.notranslate,[translate='no']")) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(n => {
            const nv = translateString(n.nodeValue);
            if (nv !== n.nodeValue) n.nodeValue = nv;
        });

        if (root.querySelectorAll) {
            root.querySelectorAll("[placeholder],[title],[aria-label]").forEach(el => {
                if (el.closest(".notranslate,[translate='no']")) return;
                ["placeholder", "title", "aria-label"].forEach(attr => {
                    if (el.hasAttribute(attr)) el.setAttribute(attr, translateString(el.getAttribute(attr)));
                });
            });
        }
    }

    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    document.body && document.body.setAttribute("dir", "ltr");

    translateElement(document.body);

    // Translate text inserted later by interactive JavaScript.
    const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            if (mutation.type === "characterData") {
                translateElement(mutation.target);
            } else {
                mutation.addedNodes.forEach(node => translateElement(node));
            }
        }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });

    // Translate JS dialogs without changing existing application logic.
    const nativeAlert = window.alert.bind(window);
    const nativeConfirm = window.confirm.bind(window);
    const nativePrompt = window.prompt.bind(window);
    window.alert = message => nativeAlert(translateString(String(message)));
    window.confirm = message => nativeConfirm(translateString(String(message)));
    window.prompt = (message, defaultValue) => nativePrompt(
        translateString(String(message)),
        defaultValue == null ? defaultValue : translateString(String(defaultValue))
    );
})();

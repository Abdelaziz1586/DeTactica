@echo off
cd /d "%~dp0"
if not exist ".venv_new\Scripts\python.exe" (
  py -3.14 -m venv .venv_new
  if errorlevel 1 goto :failed
)
".venv_new\Scripts\python.exe" -m pip install -r requirements.txt
if errorlevel 1 goto :failed
echo.
echo Open http://127.0.0.1:5000 in your browser
echo.
".venv_new\Scripts\python.exe" app.py
if errorlevel 1 goto :failed
goto :end
:failed
echo.
echo Something failed. Send a screenshot of this window.
:end
pause

@echo off
if not exist go-backend-test (
    echo Cloning Go repository...
    "C:\Program Files\Git\bin\git.exe" clone https://github.com/JoanaXapaca/go-backend-test.git
) else (
    echo Go repository already exists.
)
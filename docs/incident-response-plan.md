\# CI/CD Incident Response Plan



\*\*Standard:\*\* ISO 13485:2016 (sec. 4.1.6)

\*\*Version:\*\* 1.0



\## 1. Credential Compromise (GitHub / SonarQube)



\*\*Detection:\*\*

\- Unusual activity in Jenkins logs.

\- Unauthorized commits or analysis failures.

\- Token usage from unknown IPs.



\*\*Response:\*\*

1\. Revoke the compromised token immediately (GitHub / SonarQube).

2\. Generate a new token and update Jenkins credentials.

3\. Audit Jenkins logs for unauthorized access.

4\. Document the incident (date, impact, actions taken).



\## 2. Jenkins Service Failure



\*\*Detection:\*\*

\- Jenkins URL returns `ERR\_CONNECTION\_REFUSED`.

\- Service status is `Stopped`.



\*\*Response:\*\*

1\. Restart the service: `Restart-Service -Name Jenkins`.

2\. If it fails, check `C:\\Program Files\\Jenkins\\jenkins.err.log`.

3\. Verify the JDK path in `jenkins.xml`.

4\. If the JDK was updated, update the `<executable>` path and reinstall the service.



\## 3. Malicious Code Injection (Unauthorized Commit)



\*\*Detection:\*\*

\- Unexpected changes in the `main` branch.

\- Failed tests or Quality Gate.

\- Manual code review.



\*\*Response:\*\*

1\. Revert the commit immediately (`git revert <commit>`).

2\. Notify the security team.

3\. Follow the Change Control procedure (SOP 7.3.9).

4\. Document the incident and root cause analysis.



\## 4. Pipeline Failure (Build Breaks)



\*\*Detection:\*\*

\- Jenkins build status is `FAILURE`.

\- Red icon in the dashboard.



\*\*Response:\*\*

1\. Check the Console Output for the failing stage.

2\. If it's a code issue, notify the developer.

3\. If it's an infrastructure issue, check Docker, SonarQube, and network.

4\. Document the failure and resolution.



\## 5. References



\- ISO 13485:2016 sec. 4.1.6

\- Quality Manual GlobeStar v01.47


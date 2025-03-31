import React from 'react'

function IAMClenup() {
  return (
    <div className='container'>
        <h1>Tech Stack: Python, AWS IAM (or simulated local IAM), Slack API</h1>
<a href='https://github.com/Pjpatel1/IAMCleaner'>Git Hub Link</a>
<h2>Description:</h2>
<h3>Built a tool to automatically detect and revoke unused IAM roles, enforcing the principle of least privilege. Key features:

Scans IAM roles and flags those unused for more than 90 days (or never used).

Dry-run mode for safe testing and CSV reports for compliance audits.

Slack integration to alert security teams in real-time.

Simulated AWS IAM locally for testing (no cloud costs).

Impact:

Reduces attack surface by eliminating stale permissions.
</h3>


    </div>
  )
}

export default IAMClenup
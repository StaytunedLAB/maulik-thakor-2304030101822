import { Octokit } from "@octokit/core";

const octokit = new Octokit({
    auth: "your key"
});

async function createIssue () {
    try {
        await octokit.request('POST /repos/StaytunedLAB/maulik-thakor-2304030101822/issues', {
            owner: 'StaytunedLAB',
            repo: 'maulik-thakor-2304030101822',
            title: 'issue created using javascript code',
            body: "issue created using javascript code using rest api key token.",
            labels: ['Task'],
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        console.log("issue created");
    } catch (error) {
        console.error("Error creating issue:", error);
    }
}
createIssue();

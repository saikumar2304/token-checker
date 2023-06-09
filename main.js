const fs = require('fs');

const tokens = fs.readFileSync('tokens.txt', 'utf-8').split('\n');
async function checkTokens() {
    for (const token of tokens) {
        fetch("https://discord.com/api/v9/users/@me/library", {
            headers: {
                Authorization: token,
            },
        }).then((response) => {
            if (response.status == 200) {
                fs.appendFileSync("unlocked.txt", `${token}\n`, (err) => { });
                console.log(`${token} - is Unlocked :)`);
            } else {
                fs.appendFileSync("locked.txt", `${token} -\n`, (err) => { });
                console.log(`${token} - is Locked :(`);
            }
        });
    }
}

checkTokens();

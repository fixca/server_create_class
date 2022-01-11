const run = () => {
    const name = prompt(`그대의 이름은 무엇인가?`);
    const age = parseInt(prompt(`그대의 나이는 몇 살인가?`));
    const job = prompt(`그대의 직업은 무엇인가?`);

    if (name === "지용") {
        alert(`프리패스!`);
        return;
    }

    if (job === "백수") {
        alert(`나가!`);
        return;
    }

    if(job === "재벌2세") {
        alert(`패스!`);
        return;
    }

    if(age < 20) {
        alert(`나가!`);
        return;
    }
    else {
        alert(name === "철수" ? "저런..." : "패스!");
        return;
    }
}

(run())();
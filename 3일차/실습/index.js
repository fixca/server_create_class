const run = () => {
    const nameValue = prompt(`그대의 이름은 무엇인가?`);
    const ageValue = parseInt(prompt(`그대의 나이는 몇 살인가?`));
    const jobValue = prompt(`그대의 직업은 무엇인가?`);

    const human = {
        name: nameValue,
        age: ageValue,
        job: jobValue
    };

    if (human.name === "지용") {
        alert(`프리패스!`);
        return;
    }

    if (human.job === "백수") {
        alert(`나가!`);
        return;
    }

    if(human.job === "재벌2세") {
        alert(`패스!`);
        return;
    }

    if(human.age < 20) {
        alert(`나가!`);
        return;
    }
    else {
        alert(human.name === "철수" ? "저런..." : "패스!");
        return;
    }
}

(run())();
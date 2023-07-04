---
title: Sean Dupiano Uji
---

<script src="../../_scripts/orgchart.js"></script>

<div style="width:100%; height:700px;" id="tree"></div>

<script>
    var chart = new OrgChart(document.getElementById("tree"), {
    nodeMouseClick: OrgChart.action.none,
    template: "rony",
    enableSearch: false,
    mouseScrool: OrgChart.action.none,
    nodeBinding: {
        field_0: "name",
        field_1: "numbernick",
        field_2: "class",
        img_0: "img"
    },
    nodes: [
        { id: 1, name: "Sean Dupiano", numbernick: "#3 \"\Wumbo\"\ ", class: "Charter Class \|\ SP20", img: "../../images/bros/3sdupiano.png" },
        { id: 2, pid: 1, name: "Tyler Liu", numbernick: "#15 \"\Re:Zerø\"\ ", class: "Alpha Class \|\ SP21", img: "../../images/bros/15tliu.png" },
        { id: 3, pid: 2, name: "Alex Chiu", numbernick: "#22 \"\REYN\"\ ", class: "Beta Class \|\ FA21", img: "../../images/bros/22achiu.png" },
        { id: 4, pid: 1, name: "Ayoub Benaaouinate", numbernick: "#19 \"\PLUTUS\"\ ", class: "Beta Class \|\ FA21", img: "../../images/bros/19abenaaouinate.png" },
        { id: 5, pid: 3, name: "Jason Zhang", numbernick: "#28 \"\MONΛRCH\"\ ", class: "Gamma Class \|\ SP22", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
        { id: 6, pid: 3, name: "Zilai Wang", numbernick: "#30 \"\SEKKI\"\ ", class: "Gamma Class \|\ SP22", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
        { id: 7, pid: 3, name: "Matthew Gong", numbernick: "#39 \"\iMΛJINe\"\ ", class: "Delta Class \|\ SP23", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
        { id: 8, pid: 5, name: "Alex Zhang", numbernick: "#35 \"\CHIKΛ\"\ ", class: "Delta Class \|\ SP23", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
    ]
});
</script>
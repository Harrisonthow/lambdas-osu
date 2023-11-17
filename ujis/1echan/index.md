---
title: Ethan Chan Uji
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
        { id: 1, name: "Ethan Chan", numbernick: "#1 \"\Doc McStuffins\"\ ", class: "Charter Class \|\ SP20", img: "../../images/bros/1echan.png" },
        { id: 2, pid: 1, name: "Sonny Vuong", numbernick: "#13 \"\CASΛNOVA\"\ ", class: "Alpha Class \|\ SP21", img: "../../images/bros/13svuong.png" },        
        { id: 3, pid: 2, name: "Kelvin Nguyen", numbernick: "#25 \"\GOOCHIE MΛNE\"\ ", class: "Beta Class \|\ FA21", img: "../../images/bros/25knguyen.png" },
        { id: 4, pid: 3, name: "Harrison Thow", numbernick: "#43 \"\VΛPRE\"\ ", class: "Delta Class \|\ SP23", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
        { id: 5, pid: 1, name: "Kristian Janevski", numbernick: "#37 \"\MESSIDONIΛ\"\ ", class: "Delta Class \|\ SP23", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
]
});
</script>
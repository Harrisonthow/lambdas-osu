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
        { id: 1, name: "Ethan Chan", numbernick: "#1 \"\Doc McStuffins\"\ ", class: "Charter Class \|\ SP20", img: "../images/1EthanChan.png" },
        { id: 2, pid: 1, name: "Kristian Janevski", numbernick: "#37 \"\MESSIDONIΛ\"\ ", class: "Delta Class \|\ SP23", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
    ]
});
</script>
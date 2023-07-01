---
title: Nicholas Dang Uji
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
        { id: 1, name: "Nicholas Dang", numbernick: "#2 \"\Cookin Mama\"\ ", class: "Charter Class \|\ SP20", img: "../../images/bros/2ndang.png" },
    ]
});
</script>
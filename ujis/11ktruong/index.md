---
title: Kenny Truong Uji
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
        { id: 1, name: "Kenny Truong", numbernick: "#11  \"SBD\"\ ", class: "Charter Class  \|\ SP20", img: "../../images/bros/11ktruong.png" },     
        { id: 2, pid: 1, name: "Ethan Chau", numbernick: "#20 \"\ΛERO\"\ ", class: "Beta Class \|\ FA21", img: "../../images/bros/20echau.png" },        
    ]
});
</script>
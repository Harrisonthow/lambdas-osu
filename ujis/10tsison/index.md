---
title: Tagumpay Sison Uji
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
        { id: 1, name: "Tagumpay Sison", numbernick: "#10  \"Pillowtalk\"\ ", class: "Charter Class  \|\ SP20", img: "../../images/bros/10tsison.png" },     
        { id: 2, pid: 1, name: "Joshua Amponsah", numbernick: "#16 \"\Zoro\"\ ", class: "Alpha Class \|\ SP21", img: "../../images/bros/16jamponsah.png" },        
    ]
});
</script>
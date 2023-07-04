---
title: Trace Nguyen Uji
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
        { id: 1, name: "Trace Nguyen", numbernick: "#7  \"¿Winnie the Who?\"\ ", class: "Charter Class  \|\ SP20", img: "../../images/bros/7tnguyen.png" },     
        { id: 2, pid: 1, name: "Michael Joo", numbernick: "#23 \"\ΛLGORHYTHM\"\ ", class: "Beta Class \|\ FA21", img: "../../images/bros/23mjoo.png" },        
        { id: 3, pid: 1, name: "Dante Le", numbernick: "#26 \"uncHEΛRTed\"\ ", class: "Gamma Class \|\ SP22", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },        
        { id: 4, pid: 3, name: "Dylan Nguyen", numbernick: "#34 \"\SHΛTTERPROOF\"\ ", class: "Delta Class \|\ SP23", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
    ]
});
</script>
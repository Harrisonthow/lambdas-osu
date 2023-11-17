---
title: Jerry Ta Uji
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
        { id: 1, name: "Jerry Ta", numbernick: "#9  \"Brock\"\ ", class: "Charter Class  \|\ SP20", img: "../../images/bros/9jta.png" },     
        { id: 2, pid: 1, name: "Andrew Garcia", numbernick: "#18 \"\PΛNCHAM\"\ ", class: "Alpha Class \|\ SP21", img: "../../images/bros/18agarcia.png" },        
        { id: 3, pid: 2, name: "James Li", numbernick: "#24 \"NBA CHUNGBOY\"\ ", class: "Beta Class \|\ FA21", img: "../../images/bros/24jli.png" },    
        { id: 4, pid: 3, name: "Padraig Hurley", numbernick: "#40 \"\ΛSTRO\"\ ", class: "Delta Class \|\ SP23", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
        { id: 5, pid: 2, name: "Joe Li", numbernick: "#38 \"\BTΛ\"\ ", class: "Delta Class \|\ SP23", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
    ]
});
</script>
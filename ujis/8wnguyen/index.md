---
title: Wesley Nguyen Uji
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
        { id: 1, name: "Wesley Nguyen", numbernick: "#8  \"Phony Hawk\"\ ", class: "Charter Class  \|\ SP20", img: "../../images/bros/8wnguyen.png" },     
        { id: 2, pid: 1, name: "Jared Malto", numbernick: "#14 \"\NOMΛD\"\ ", class: "Alpha Class \|\ SP21", img: "../../images/bros/14jmalto.png" },        
        { id: 3, pid: 1, name: "Hamzah Chaudhry", numbernick: "#21 \"ΛRETE\"\ ", class: "Beta Class \|\ FA21", img: "../../images/bros/21hchaudhry.png" },        
        { id: 4, pid: 2, name: "Guangzhou Zheng", numbernick: "#40 \"\STEEZY\"\ ", class: "Delta Class \|\ SP23", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
        { id: 5, pid: 3, name: "Mark Wang", numbernick: "#31 \"\T. LΛW\"\ ", class: "Gamma Class \|\ SP22", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
    ]
});
</script>
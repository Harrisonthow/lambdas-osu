---
title: Kenny Vo Uji
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
        { id: 1, name: "Kenny Vo", numbernick: "#12  \"M.I.R.I.O\"\ ", class: "Charter Class  \|\ SP20", img: "../../images/bros/12kvo.png" },     
        { id: 2, pid: 1, name: "William Lim", numbernick: "#32 \"\E.S.C.A.N.O.R\"\ ", class: "Gamma Class \|\ SP22", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },        
        { id: 3, pid: 2, name: "Adam Huang", numbernick: "#36 \"Λ.S.T.A\"\ ", class: "Gamma Class \|\ SP23", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },        

    ]
});
</script>
---
title: Alex Nguyen Uji
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
        { id: 1, name: "Alex Nguyen", numbernick: "#5 \"\Rule 34\"\ ", class: "Charter Class \|\ SP20", img: "../../images/bros/5anguyen.png" },
        { id: 2, pid: 1, name: "Gill Im", numbernick: "#17 \"\KILLUΛ\"\ ", class: "Alpha Class \|\ SP21", img: "../../images/bros/17gim.png" },        
        { id: 3, pid: 1, name: "Sam Zhang", numbernick: "#27 \"\MIRΛI\"\ ", class: "Gamma Class \|\ SP22", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
        { id: 4, pid: 1, name: "Yury Pozdneev", numbernick: "#29 \"\ODM\"\ ", class: "Gamma Class \|\ SP22", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
        { id: 5, pid: 4, name: "Junho Choi", numbernick: "#33 \"\MΛLPHON\"\ ", class: "Delta Class \|\ SP23", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
        { id: 6, pid: 3, name: "Jerry Meng", numbernick: "#41 \"\JOΛT\"\ ", class: "Delta Class \|\ SP23", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
    ]
});
</script>
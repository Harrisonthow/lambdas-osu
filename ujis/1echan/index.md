---
title: Ethan Chan Uji
---

<script src="../_scripts/orgchart.js"></script>


<script>
    var chart = new OrgChart(document.getElementById("tree"), {
        nodeBinding: {
            field_0: "name"
        },
        nodes: [
            { id: 1, name: "Amber McKenzie" },
            { id: 2, pid: 1, name: "Ava Field" },
            { id: 3, pid: 1, name: "Peter Stevens" }  
        ]
    });
</script> 
 
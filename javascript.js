const container = document.querySelector("#container");

const grid = document.createElement("div");
grid.classList.add("grid");
container.appendChild(grid);

 
for (i=0; i<16; i++){   
    const outer_div = document.createElement("div");
    outer_div.classList.add("rows");
    grid.appendChild(outer_div);
    for (j=0; j<16; j++){
        const inner_div = document.createElement("div");
        inner_div.classList.add("box");
        outer_div.appendChild(inner_div);
    } 
}


let table = document.getElementById("rates");
let slider = document.getElementById('slider');
let min = document.getElementById('value-min');
let max = document.getElementById('value-max');
let rows = [];
noUiSlider.create(slider, {//slider
  start: [10, 100],
  connect: true,
  range: {
      'min': 0,
      'max': 110
  }
});//array people
let people = [{name:'Casey',rate:30},  {name:'Camille',rate:50}, {name:'Gordon',rate: 75}, {name:'Nigel',rate: 100}];
  
function person(name,rate){//person smiður
    this.names = name;
    this.rates = rate;
    this.row = makerows(this.names,this.rates);//nær i function makerows sem býr til raðir
    slider.noUiSlider.on('slide',update.bind(this));//updetar ef slider er hreyfður
  }
  function makerows(name,rate){
  let newRow = document.createElement("tr");
  let Cell1 = document.createElement("td");
  let Cell2 = document.createElement("td");
  newRow.appendChild(Cell1);//newrow tekur namecell og rate cell sem child
  newRow.appendChild(Cell2);
  Cell1.innerText = name;//tekur name texta og setur hann i namecell
  Cell2.innerText = rate;//tekur rate texta og setur hann i ratecell
  table.children[0].appendChild(newRow);//table tekur inn newRow sem child
  return newRow;
 }
 for (let i of people) {//fyrir hvert item i people pushar hann 
  rows.push(new person(i.name, i.rate));
}
function update(sliders){
  if (sliders[0] < this.rates && this.rates < sliders[1]) {//if slider 1 er minna en people rate og ef slider 2 er meiri en people rate þá er það birt ef ekki þá hvefur það
    this.row.style.display = 'table-row';
    } 
else {
    this.row.style.display = 'none';
    }
};

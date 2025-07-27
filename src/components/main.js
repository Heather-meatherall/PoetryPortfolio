const title = ref("Complete the Poem to Get Your Title!")

function getTitle() {
  let soliderResults = 0;
  let poetResults = 0;
  let kingResults = 0;

    let verse1 = document.querySelector('#verse1').value;
    let verse2 = document.querySelector('#verse2').value;
    let verse3 = document.querySelector('#verse3').value;
    let verse4 = document.querySelector('#verse4').value;
    let verse5 = document.querySelector('#verse5').value;
    let verse6 = document.querySelector('#verse6').value;
    let verse7 = document.querySelector('#verse7').value;

    let verses = [verse1, verse2, verse3, verse4, verse5, verse6, verse7];

    for(let i = 0; i < verses.length; i++)
    {
        if (verses[i] == "Solider")
        {
            soliderResults++;
        }
        else if (verses[i] == "Poet")
        {
            poetResults++;
        }
        else
        {
            kingResults++;
        }
        
    }

    if(Math.max(soliderResults, poetResults, kingResults) == soliderResults)
    {
      title.value =  "For the Solider"
    }
    else if (Math.max(soliderResults, poetResults, kingResults) == poetResults)
    {
        title.value = "For the Poet"
    }
    else
    {
        title.value = "For the King"
    }
    console.log(soliderResults);
    console.log(poetResults);
    console.log(kingResults);
}
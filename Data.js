class Tshirt {


    constructor(img, couleur, taille, nom) {
      this.img = img;
      this.couleur = couleur;
      this.taille = taille;
      this.nom = nom;
    }




  }



  let tshirts = [];
  let a = new Tshirt("https://wordans-a1a5.kxcdn.com/files/model_specifications/2018/1/26/868854/868854_big.jpg?1593137853", "rouge", "XL", "Bob");
  let b = new Tshirt("https://wordans-a1a5.kxcdn.com/files/model_specifications/2018/1/26/868854/868854_big.jpg?1593137853", "bleu", "S", "Alice");
  let c = new Tshirt("https://wordans-a1a5.kxcdn.com/files/model_specifications/2018/1/26/868854/868854_big.jpg?1593137853", "jaune", "M", "Toto");
  
  tshirts.push(a);
  tshirts.push(b);
  tshirts.push(c);
  console.log(tshirts);




  let size = new Set();
  for (let t of tshirts) {
      size.add(t.taille);
  };

  console.log (size);

  let color = new Set();
  for (let t of tshirts) {

      color.add(t.couleur);
  };

  console.log (color);














  function filtreTaille(tableau, taille) {
      
    return tableau.filter(t => t.taille === taille)
  }

  function filtreCouleur(tshirts, couleur){
      
    let tab = [];
    for (const t of tshirts) {
        if (t.couleur === couleur) {
            tab.push(t);
        } 
    }
    return tab
  }

  console.log(filtreTaille(tshirts, 'XL'));
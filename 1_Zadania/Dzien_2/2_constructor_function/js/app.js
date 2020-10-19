// Konstruktor o nazwie Basket
function Basket(){
    // Kazdy to obiekt utworzony na podstawie kontstruktora
    // bedzie mial domyslnie przypisane ponizsze wlasciwosci
    this.products = [];
    this.sum = 0;
}

// Rozszerzam prototyp konstruktora o nowa metode
// kazdy obiekt utworzony na podstawie konstruktora Basket bedzie
// wspoldzielil ta metode z prototypu
Basket.prototype.addProduct = function(name, price){
    this.products.push(
        {
            name, //jesli wlasciwosc ma taka sama nazwe jak zmienna to mozna uzyc zapisu skrotowego (to samo co ---> name: name)
            price: price // to samo co ---> price
        }
    );
    this.sum += price;
}

// tu tak samo jak wyzej ;)
Basket.prototype.showBasket = function(){
    for(let i=0; i < this.products.length; i++){
        // this.products to tablica z obiektami
        // wyciagam do zmiennej product pojedynczy obiekt, zeby bylo czytelniej
        const product = this.products[i]; //{ name, price}
        // kazdy obiekt z tablicy ma wlasciwosc name oraz price (patrz linia 14)
        console.log(product.name + " kosztował "+ product.price + " zł");
    }
}

const aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();
console.log(bruceBasket);// Konstruktor o nazwie Basket

/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Twoj komentarz ...glowna funkcja uruchamiajaca pozostala czesc
function jeden() {

        //Twoj komentarz ...zmienna lokalna dla funkcji jeden ale dostepna wewnatrz funkcji dwa
        var zmienna1 = 1;

        //Twoj komentarz ...tworzymy funkcje dwa ktora uruchamiamy w linii 28
        function dwa() {

            //Twoj komentarz ...mamy dostep do zmiennej wiec zobaczymy jej wartosc
            console.log(zmienna1);

            //Twoj komentarz ...zmienna nie jest dostepna poza funkcja dwa ale bylaby dostepna wewnatrz funkcji
            // utworzonej wewn funkcji dwa
            var zmienna2 = 3;
            // zwroci mi doprzodu
            return zmienna2;
        }

        //Twoj komentarz ...uruchamiamy funkcje dwa() dzieki return wyzej i przypisaniu pod zmienna moge jej uzyc,
        // nalezy pamietac ze jest to zmienna lokalna.

        const zmienna2 = dwa();

        dwa();

        //Twoj komentarz ..zmienna dwa zostala utworzona w funkcji dwa() i nie mamy do niej dostepu.
        console.log(zmienna2)
    }

    //Twoj komentarz ...uruchamiamy funkcje jeden
    jeden()

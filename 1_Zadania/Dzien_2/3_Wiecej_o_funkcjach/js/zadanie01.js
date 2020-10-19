
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Twoj komentarz ...glowna funkcja uruchamiajaca dalsza czesc
function sortArray() {

        //Twoj komentarz ...deklaruje tablice ktora jest dostepna-zmienna lokalna dla funkcji sortArray
        // ale dostepna dla points.sort()
        var points = [41, 3, 6, 1, 114, 54, 64];

        //Twoj komentarz ...funkcja sortujaca z anonimowa ktora porownuje elem tablicy dostepne
        // jako zmienna points wewnatrz funkcji sortArray
        points.sort(function(a, b){
            //Twoj komentarz ...zwraca wynik posortowania, od najmniejszej do najwiekszej
            // console.log(a,b);
            // zeby zobaczyc jak porownuje
            return a-b;
        });

        //Twoj komentarz ...zwraca tablice posortowana
        return points;
    }

    //Twoj komentarz ...uruchamia funkcje nadrzedna
    sortArray();
    // wypisuje posortowana tablice
    console.log(sortArray());

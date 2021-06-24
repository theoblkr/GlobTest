# GlobTest


## Enoncé

Soit une fonction `foo()` dont le comportement est le suivant :

|  Appel     |  Sortie     |
| ---   |:-:    |
| `foo([[0, 3], [6, 10]])` | `[[0, 3], [6, 10]]` |
| `foo([[0, 5], [3, 10]])` | `[[0, 10]]` |
| `foo([[0, 5], [2, 4]])` | `[[0, 5]]` |
| `foo([[7, 8], [3, 6], [2, 4]])` | `[[2, 6], [7, 8]]` |
| `foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]])` | `[[1, 10], [15, 20]]` |

Votre mission est de comprendre ce que fait cette fonction et de la recoder.

### Question 1

Expliquez, en quelques lignes, ce que fait cette fonction.

### Question 2

Codez cette fonction.

### Question 3

Précisez en combien de temps vous avez implémenté cette fonction. 
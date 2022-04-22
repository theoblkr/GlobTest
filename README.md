# GlobTest


## Enoncé

[Echo](https://www.instagram.com/globalisecho/?hl=fr), mascotte de l'équipe de [Globalis](https://www.globalis-ms.com/), a découvert une fonction `foo()` bien mystérieuse. Hélas, il n'a pas accès au code. Curieux et grand amateur de [rétro-ingénierie](https://fr.wikipedia.org/wiki/R%C3%A9tro-ing%C3%A9nierie), Echo s'est amusé à appeler cette fonction, en injectant des données en entrée et en récoltant les sorties. Le comportement de la fonction `foo()` est le suivant :

|  Appel     |  Sortie     |
| ---   |:-:    |
| `foo([[0, 3], [6, 10]])` | `[[0, 3], [6, 10]]` |
| `foo([[0, 5], [3, 10]])` | `[[0, 10]]` |
| `foo([[0, 5], [2, 4]])` | `[[0, 5]]` |
| `foo([[7, 8], [3, 6], [2, 4]])` | `[[2, 6], [7, 8]]` |
| `foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]])` | `[[1, 10], [15, 20]]` |

Le challenge, si vous l'acceptez, serait d'aider Echo à comprendre ce que fait cette fonction et à la recoder. Vous êtes partant ? ;)

### Question 1

Expliquez, en quelques lignes, ce que fait cette fonction.

- Cette fonction prend en paramètre une liste d'intervalles triées ou non triées et renvoie les plus grands intervalles de telle sorte qu'elles ne se chevauchent pas.
Exemple : `[[0, 3], [2, 4]]` renvoie `[[0, 4]]` car les intervalles se chevauchent alors que `[[0, 7], [9, 14]]` renvoie `[[0, 7], [9, 14]]`
### Question 2

Codez cette fonction.
Merci de fournir un fichier contenant :

- la fonction, 
- l'appel de la fonction, avec un jeu de test en entrée,
- l'affichage du résultat en sortie.

<ins>Voir le fichier `index.js`</ins>

### Question 3

Précisez en combien de temps vous avez implémenté cette fonction.
- J'ai mis 1h30 pour implémenter cette fonction
## Merci

Par avance, un grand merci pour le temps que vous consacrerez à ce challenge, en espérant vous voir rejoindre très prochainement [nos équipes](https://www.globalis-ms.com/jobs/) ;) 
# GameTracker

## Componentes

### gameSelector

``` <gameSelector></gameSelector> ```

#### funciones internas

```setSize()```

Determina el tamaño por defecto del menu de juegos siendo 100/cantidad de juegos registrados


```reSize()```

Determina el tamaño por defecto de los menus cerrados de juegos cuando uno de ellos esta abierto siendo (20/cantidad de juegos menos 1)

```toggleGameMenu(index)```

Togglea el status del menu de juegos 

```resetOpenCloseStatus()```

regresa el status de todos los menu de juegos a cerrado
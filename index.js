function newImage(url, left, bottom){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}
function move(image) {
    image.style.position = 'fixed';
  
    function moveToCoordinates(left, bottom) {
      image.style.left = left + 'px';
      image.style.bottom = bottom + 'px';
    }
  
    function moveWithArrowKeys(left, bottom, callback) {
      let direction = null;
      let x = left;
      let y = bottom;
  
      function moveCharacter() {
        if (direction === 'west') {
          x -= 1;
        }
        if (direction === 'north') {
          y += 1;
        }
        if (direction === 'east') {
          x += 1;
        }
        if (direction === 'south') {
          y -= 1;
        }
        image.style.left = x + 'px';
        image.style.bottom = y + 'px';
      }
  
      setInterval(moveCharacter, 1);
  
      document.addEventListener('keydown', function (e) {
        if (e.repeat) return;
  
        if (e.key === 'ArrowLeft') {
          direction = 'west';
        }
        if (e.key === 'ArrowUp') {
          direction = 'north';
        }
        if (e.key === 'ArrowRight') {
          direction = 'east';
        }
        if (e.key === 'ArrowDown') {
          direction = 'south';
        }
        callback(direction);
      });
  
      document.addEventListener('keyup', function (e) {
        direction = null;
        callback(direction);
      });
    }
  
    return {
      to: moveToCoordinates,
      withArrowKeys: moveWithArrowKeys,
    };
  }
  
  const character = newImage('assets/green-character/static.gif');
  
  function handleDirectionChange(direction) {
    if (direction === null) {
      character.src = 'assets/green-character/static.gif';
    } else if (direction === 'west') {
      character.src = 'assets/green-character/west.gif';
    } else if (direction === 'north') {
      character.src = 'assets/green-character/north.gif';
    } else if (direction === 'east') {
      character.src = 'assets/green-character/east.gif';
    } else if (direction === 'south') {
      character.src = 'assets/green-character/south.gif';
    }
  }
  
  move(character).withArrowKeys(100, 250, handleDirectionChange);
function newItem(url, left, bottom) {
    let item = newImage(url, left, bottom)
    item.addEventListener('click', function () {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url
        inventory.append(inventoryItem)
    })
}

let inventory = document.createElement('div')

function newInventory() {
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}

newInventory()

newImage('assets/green-character.gif', 100, 250)
newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/pine-tree.png', 450, 350)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)

newItem('assets/sword.png', 500, 555)
newItem('assets/shield.png', 165, 335)
newItem('assets/staff.png', 600, 250)


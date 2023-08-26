const inputText = document.querySelector('#add-book input');
const add = document.querySelector('.button');
const ul = document.querySelector('ul');
const checkBox = document.querySelector('#hide input');
const clear = document.getElementById("clear-all");
const number = document.getElementById("number");
let h3 = document.getElementById('child');
const spanDelete = `<span class="delete"><i class="fa-solid fa-trash"></i></span>`;
showTasks();
add.addEventListener('click', function (e) {

  const spanName = document.createElement('span');
  spanName.className = 'name';
  spanName.textContent = inputText.value;

  const li = document.createElement('li');

  if (spanName.textContent.trim() != 0) {
    li.appendChild(spanName);
    li.innerHTML += spanDelete;

    ul.appendChild(li);

    storeToLocalStorage(inputText.value);

    inputText.value = '';
    e.preventDefault();
    showTasks();

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-start',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Item add successfully'
    })
  }
  else {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-start',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'warning',
      title: 'Your input is empty'
    })
    inputText.value = '';
  }
})



ul.addEventListener('click', function (e) {
  if (e.target.className === 'delete') {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `<span style="color:#fff;width: 70px;">Yes<em class="fa fa-check-square mx-2" style="color:#fff; margin-left: 25px;"></em></span>`,
      cancelButtonText: `<span style="color:#fff;">No<em class="fa fa-window-close mx-2" style="color:#fff; margin-left: 25px;"></em></span>`,
    }).then((result) => {
      if (result.isConfirmed) {
        e.target.parentElement.remove();
        removeFromLocalStorage(e.target.parentElement.children[0].textContent);
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-start',
          iconColor: 'white',
          customClass: {
            popup: 'colored-toast'
          },
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Item delete successfully'
        })

      }
    });

  }
  if (e.target.className === 'fa-solid fa-trash') {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `<span style="color:#fff;width: 70px;">Yes<em class="fa fa-check-square mx-2" style="color:#fff; margin-left: 25px;"></em></span>`,
      cancelButtonText: `<span style="color:#fff;">No<em class="fa fa-window-close mx-2" style="color:#fff; margin-left: 25px;"></em></span>`,
    }).then((result) => {
      if (result.isConfirmed) {
        e.target.parentElement.parentElement.remove();
        removeFromLocalStorage(e.target.parentElement.parentElement.children[0].textContent);
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-start',
          iconColor: 'white',
          customClass: {
            popup: 'colored-toast'
          },
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Item delete successfully'
        })

      }
    });

  }

})




clear.addEventListener("click", () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: `<span style="color:#fff;width: 70px;">Yes<em class="fa fa-check-square mx-2" style="color:#fff; margin-left:10px;"></em></span>`,
    cancelButtonText: `<span style="color:#fff;">No<em class="fa fa-window-close mx-2" style="color:#fff; margin-left:10px;"></em></span>`,
  }).then((result) => {
    if (result.isConfirmed) {

      if (ul.querySelector('li') !== null) {
        while (ul.firstChild) {
          ul.removeChild(ul.firstChild);
        }
        localStorage.clear();
        ul.appendChild(h3);
        showTasks();

        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-start',
          showConfirmButton: false,
          iconColor: 'white',
          customClass: {
            popup: 'colored-toast'
          },
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'List clear successfully'
        })
      }
      else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-start',
          showConfirmButton: false,
          iconColor: 'white',
          customClass: {
            popup: 'colored-toast'
          },
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'warning',
          title: 'List is empty'
        })

      }
      showTasks();

    }
  });
})


document.addEventListener('DOMContentLoaded', function (e) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem('tasks').split(',');
  }

  for (let item of tasks) {
    const spanName = document.createElement('span');
    spanName.className = 'name';
    spanName.textContent = item;

    const li = document.createElement('li');

    li.appendChild(spanName);
    li.innerHTML += spanDelete;
    ul.appendChild(li);
  }

})

function storeToLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem('tasks').split(',');
  }

  tasks.push(task);

  localStorage.setItem('tasks', tasks);
}


function removeFromLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem('tasks').split(',');
  }
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === task) {
      tasks.splice(i, 1);
    }
  }

  if (tasks.length === 0) {
    localStorage.clear();
  } else {
    localStorage.setItem('tasks', tasks);
  }
  showTasks();

  if (tasks.length === 0) {
    ul.appendChild(h3);
  }
}


function showTasks() {
  let tasks;
  let getLocalStorageData = localStorage.getItem('tasks');
  if (getLocalStorageData === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem('tasks').split(',');
  }

  number.innerHTML = tasks.length;

  if (tasks.length > 0) {
    if (ul.querySelector('#child') !== null) {
      ul.removeChild(h3);
    }
  }
}



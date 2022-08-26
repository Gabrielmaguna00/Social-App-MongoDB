# Social-App-MongoDB Rutas: GETs: Users:
<ul>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/user ->Entrega todos los
      usuarios
    </p>
  </li>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/user/:userId ->Entrega un
      usuario por su ID
    </p>
  </li>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/user/age/:min/:max ->Entrega
      usuarios segun el filtro de edad (:min es la edad mayor o igual)
    </p>
  </li>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/user/country/:country
      ->Entrega usuarios segun su pais
    </p>
  </li>
</ul>

Post:
<ul>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/post -> Entrega todos los
      posts
    </p>
  </li>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/post/:postId ->Entrega un post
      por su id
    </p>
  </li>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/post/:userId ->Entrega los
      posts de un usuario por su id
    </p>
  </li>
</ul>
POSTs: Users:
<ul>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/user/post ->Crea un usuario
      :{"name": "", "age": , "email": "", "country": ""}
    </p>
  </li>
</ul>

Post:
<ul>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/post ->Crea un post :
      {"title":"", "content":"", "category":"", "userId":""}
    </p>
  </li>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/post/draft ->Crea un borrador
      (sin ser publicado) : {"title":"", "content":"", "category":"",
      "userId":""}
    </p>
  </li>
</ul>
PUTs: Users:
<ul>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/user/update/:userId ->Realiza
      un update de name, age y country: {"name": "", "age": , "country": ""}
    </p>
  </li>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/user/delete/:userId
      ->"Elimina" el usuario (su vibilidad se en db se vuelve de true a false) y
      elimina definitivamente todos sus posts/drafts
    </p>
  </li>
</ul>

Post:
<ul>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/post/update ->Edita un post:
      {"title":"", "content":"", "category":"", "postId":""}
    </p>
  </li>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/post/hiden/:postId ->Oculta un
      post (published:false)
    </p>
  </li>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/post/draft/:postId ->Publica
      un borrador (published: true)
    </p>
  </li>
</ul>
DELETEs: Users: Post:
<ul>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/post/delete/:postId ->Elimina
      un post/draft definitivamente
    </p>
  </li>
  <li>
    <p>
      https://social-app-zbsj.onrender.com/api/v1/post/delete/:userId ->Elimina
      todos los post/draft de un usuario
    </p>
  </li>
</ul>


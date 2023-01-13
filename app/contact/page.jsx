export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
        obcaecati, molestias doloremque necessitatibus sint deserunt distinctio
        quas sapiente, explicabo enim illo itaque, aut cum. Expedita voluptatem
        soluta aspernatur blanditiis praesentium?
      </p>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <label>
          Correo electrónico:
          <input type="email" name="email" />
        </label>
        <label>
          Mensaje:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

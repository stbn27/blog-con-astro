class Formatter {
  static formatDate(value) {
    const date = new Date(value);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    });
  }
}

export { Formatter as F };

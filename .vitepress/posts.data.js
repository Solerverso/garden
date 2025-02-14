export default {
  async load() {
    // fetch remote data
    return (await fetch('...')).json()
  }
}

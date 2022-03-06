class Table {
  constructor(db, table) {
    this.db = db
    this.table = table
  }

  async all() {
    const items = await this.db.select().from(this.table)
    return items
  }

  async create(data) {
    const result = await this.db(this.table).insert(data)
    return result[0]
  }

  async find(id) {
    const result = await this.db(this.table).where({ id }).first()
    return result
  }

  async edit(id, data) {
    await this.db(this.table).where({ id }).update(data)
  }

  async delete(id) {
    await this.db(this.table).where({ id }).del()
  }
}

module.exports = Table
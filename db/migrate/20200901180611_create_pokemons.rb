class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.string :name, null: true
      t.string :kind, null: true
    end
  end
end

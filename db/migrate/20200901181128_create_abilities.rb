class CreateAbilities < ActiveRecord::Migration[5.2]
  def change
    create_table :abilities do |t|
      t.string :name, null: true
      t.belongs_to :pokemon, null: true
    end
  end
end

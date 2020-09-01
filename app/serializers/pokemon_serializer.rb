class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :kind
  has_many :abilities
end

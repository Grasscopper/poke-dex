class AbilitySerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :pokemon
end

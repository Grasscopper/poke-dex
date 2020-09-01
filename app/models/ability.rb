class Ability < ApplicationRecord
  validates :name, presence: true

  belongs_to :pokemon
end

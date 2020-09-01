Rails.application.routes.draw do
  resources :pokemons, only: [:index]
  namespace :api do
    resources :pokemons, only: [:index]
  end
end

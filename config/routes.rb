Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get 'greeting', to: 'api#random_greeting', as: :random_greeting
  get "*path", to: "static#index"
  root "static#index"
end

class Api::GreetingsController < ApplicationController
  def random_greetings
    greeting = Greeting.order('RANDOM()').first
    render json: { message: greeting.text }
  end
end

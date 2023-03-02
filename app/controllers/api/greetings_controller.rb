class Api::GreetingsController < ApplicationController
  def greetings
    greeting = Greeting.order("RANDOM()").first
    render json: { message: greeting.text }
  end
end

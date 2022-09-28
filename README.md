# 🦋 Reluvate Malaysia - Frontend assessmnent task

This assessment is a part of the hiring process at Reluvate for the full-time front-end developer position.

Website is deployed [here](https://reluvate.netlify.app/login/)

## Technologies used ⚙

- ReactJS with [Vite](https://create-react-app.dev/) v5.0+
- [TailwindCSS](https://react-bootstrap.github.io/) for styling
- [react-toastify](https://github.com/fkhadra/react-toastify) for displaying toasts on actions performed
- [react-confetti](https://github.com/alampros/react-confetti) for party effect after successfully catching a pokemon
- [react-router](https://reactrouter.com/en/main) for routing

## Tasks Completed ✅

- Three pages created; one for login, one for catching pokemon and one for displaying pokemon
- Created a “Catch Pokemon” tab, accessible via the Navbar
- Show a randomly generated pokemon from the dataset(from the list of all
  pokemons), available for capture. Display image with unique bg color and show for each pokemon card. Mock data using json inside project
- Used input to take numbers for guessing
- Easy, medium and hard difficulty selectable using buttons
- Add pokemon to array of pokemons of successfull attempt of guessing the number
- Disable button after 3 tries
- Random int between 1-100 generated after guessing the number for each captured pokemon
- Deployed front-end to Netlify

## Not Completed ❌

- Backend tasks, creation of API endpoints
- Authentication using JWT, unique user, etc
- Database integration
- Deployment to AWS EC2

## Demo:

### Main Page

Main page contains a navbar with 2 buttons. Nested routes are declared using this route "/"
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/75773436/192891329-de68e48b-cdaa-4690-821c-7ced67af4c4a.png">

### Login Page

Login page just redirects to /catch-pokemon after entering any values and clicking the login button. There is no authentication here and successful login mimics network request using timeout so success toast can be displayed for a while
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/75773436/192892409-25ee0dff-4561-450e-8019-827ab3321f63.png">
![image](https://user-images.githubusercontent.com/75773436/192892780-25fb446e-de92-4fc2-8498-44588d8388ab.png)




### Catch Pokemon

Catch Pokemon button redirects to /catch-pokemon page. It initializes the game with 3 tries, a random number is generated for guessing and a random pokemon is displayed from a list of 16 pokemons. Pokemon card is displayed with details such as hp, etc.

A number must be input for guessing. A toast is displayed with error if number is incorrect and success message if the guessed number by user matches the randomly generated number at start. Buttons are available to change difficulty level to easy(1-10), medium(1=100) or hard(1-1000). A confetti animation runs for 6 seconds if a pokemon is captured.
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/75773436/192891541-9e6060cc-e527-43b9-840f-60bccde97f2b.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/75773436/192891575-ea71cffe-af69-4ef6-bf76-e36b392b6522.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/75773436/192891698-4c820dc1-93cb-47e9-b0c1-da97f4f4ebd8.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/75773436/192891833-170ca415-7672-4dd2-9d2f-803d0145ebd0.png">


### View Pokemon

User can view the pokemons collected by clicking the view pokemon button in the navbar. This page uses the same pokemon card component from catch pokemon page along with displaying a level betweeen 1-100 generated during pokemon capture. I have also added an extra option to delete a pokemon lest the user does not need it.

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/75773436/192892009-2d95901e-82d3-4648-acfc-e7421790d29d.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/75773436/192892078-f9625bab-1e15-44e0-8c2b-462df5c6b586.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/75773436/192892009-2d95901e-82d3-4648-acfc-e7421790d29d.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/75773436/192892173-e7055b08-6d96-45ff-90d5-1dbbf9408622.png">

### Not found page

If a route does not exist, user is shown this page
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/75773436/192892333-af4d17c9-dc71-46d0-a86a-9de663289307.png">


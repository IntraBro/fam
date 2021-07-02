var images = ['https://i.pinimg.com/originals/00/67/8c/00678c2b5ed4661958f5437f0f8f0513.jpg','https://i.postimg.cc/bw5W5zSK/mother.jpg', 'https://image.shutterstock.com/image-vector/happy-young-father-holding-his-260nw-731506243.jpg', 'https://i.pinimg.com/736x/77/d4/15/77d41520a3f07995b184797a3734bf44.jpg', 'https://i.pinimg.com/originals/7e/cf/16/7ecf1629515f7cbf656b6d9508d3f0a3.jpg', 'https://t3.ftcdn.net/jpg/02/62/72/10/360_F_262721052_Vu8A61M6FpOHP5LgPFHJDlvwwF5ynvc9.jpg', 'https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-little-girl-avatar-character-vector-illustration-design.jpg?ver=6']
var namearray = ['My Family','Meera Bhowmick', 'Somen Bhowmick', 'Arnitez And Abhinav Bhowmick', 'Seema Bhowmick', 'NN Bhowmick', 'Aaradhya Bhowmick']
var i = 0
function main(){
    i++
    var num = 6;
    if(i > images){
        i = 0
    }
    document.getElementById('image').src = images[i]
    document.getElementById('name').innerHTML = namearray[i]

}










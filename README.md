<!doctype html>
<html lang="zh">

<head>
    <title>Joyce_Zhao Blog</title>
    <link rel="stylesheet" href="style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="" />
    <style>
        body {
            background-color: aquamarine;
            padding: 10px 10px 10px 10px;
        }

        .header {
            background-color: aliceblue;
            width: 100%;
            height: 400px;
            color: black;
        }

        #menu {
            background-color: royalblue;
            width: 100%;
            height: 40px;
            display: grid;
            grid-template-columns: 60% 10% 10% 10% 10%;

        }

        #menu h3 {
            color: aliceblue;
            grid-column-start: 4;
            grid-column-end: 5;
            margin: 3 auto;
        }

        #front-header {
            background-color: cornflowerblue;
            width: 80%;
            height: 340px;
            margin: 10px auto;
        }

        #divid {
            background-color: #99ccff;
            width: 100%;
            height: 25px;
        }

        /* #divid b {
            color: cornsilk;
            margin: 5px 40px;
        } */

        .header-img {
            background-image: url('03.jpg');
            background-size: cover;
            width: 100%;
            height: 340px;
            margin: 0 auto;
        }


        .content {
            background-color: #8ae4e4;
            width: 100%;
            height: 3100px;
            padding: 10px auto;
            margin: 0 auto;
            display: inline-block;
        }

        .per-inf {
            background-color: aliceblue;
            width: 80%;
            height: 500px;
            margin: 20px 10%;
        }

        .per-inf>.chapter-1 {
            background-color: #8ae4e4;
            width: 60%;
            height: 300px;
            margin: 40px 0px 10px 30px;
        }

        #infor {
            padding: 10px 10px;
            background-color: #3366;
            width: 80%;
            height: 200px;
            margin: 10px 10px;
            color: white;
        }

        #infor>.table {
            font-size: 30px;
            font-family: Georgia;
            color: whitesmoke;
        }

        .chapter-font {
            font-size: 40px;
            font-weight: 72;
        }

        #divid-1 {
            background-color: #8ae4e4;
            height: 30px;

            display: inline-block;
        }

        .per-inf>.chapter-2 {
            background-color: #8ae4e4;
            width: 80%;
            height: 140px;
            margin: 20px 0px 20px 220px;
            padding: 5px 0px 10px 30px;
            display: inline-block;
            color: steelblue;
        }

        .chapter-2>p {
            word-wrap: break-word;
            line-height: 25px;
            font-size: 20px;
            color: steelblue;
        }

        .school {
            /* background-color: aquamarine; */
            width: 80%;
            height: 1100px;
            margin: 20px 10%;
            display: inline-block;
        }

        .five-part {
            display: inline-block;
            background-color: #8ae4e4;
            width: 100%;
            height: 18%;
        }

        .divid-five {
            /* background-color:#99ccff； */
            float: left;
            width: 20%;
            height: 100%;
            color: royalblue;
        }

        .divid-five>.container {
            display: inline-block;
            padding: 5px 5px 5px 5px;
            margin: 20% 10% 20% 10%;
            height: 80%;
            width: 60%;
            background-color: #ccffff;
        }

        .mid-2 {
            display: inline-block;
            background-color: #336699;
            width: 100%;
            height: 300px;
            margin:10px 0px 10px 0px;
        }

        .mid-2-1 {
            background-color: steelblue;
            /* background-image: url('mid-2-1.jpg'); */
            background-size: cover;
            width: 70%;
            height: 300px;
            float: left;
        }

        .mid-job {
            /* background-color: #0099ff; */
            width: 55%;
            height: 40%;
            float: left;
        }

        #mid-job>.left-part {
            background-image: url("mid-2.jpg");
            background-size: cover;
            width: 180px;
            height: 200px;
            border-radius: 50%;
            -moz-border-rabius: 50%;
            -webkit-border-radius: 50%;
            margin: 50px 10px 50px 40px;
        }

        #mid-job>.right-part {
            background-color: #ccffff;
            width: 160px;
            height: 240px;
            margin: 30px 20px 30px 20px;
            float: left;
        }

        #mid-sch-name {
            font-size: 28px;
            margin: 5px auto;
            font-family: 'Times New Roman', Times, serif;
        }

        #mid-poster {
            background-image: url("mid-poster.jpg");
            background-size: cover;
            width: 27%;
            margin: 15px 10px 15px 10px;
            height: 260px;
            float: right;
            padding: 5px 5px 5px 5px;
        }

        #mid-poster>.container {
            background-image: url("")
        }

        .uni {
            margin:10px 0px 10px 0px;
            display: inline-block;
            background-color:aliceblue;
            width: 100%;
            height: 300px;
        }

        .uni-left{
            float:left;
            padding:5px 10px 0px 10px;
            font-family: 'Times New Roman', Times, serif;
            font-weight: 90px;
            color:#336699;
            width: 60%;
        }

        #uni-name{
            font-weight:72 ;
            width:100%;
            height:30%;
            float: left;
        }

        #uni-text{
            font-weight:18;
            width:100%;
            height:65%;
            float: right;
        }

        .uni-left > p{

        }

        .uni-right {
            float: right;
            margin: 10px 10px;
            width: 30%;
            height: 280px;
            background-color:#0099cc;
        }

        #uni-img-1 {
            display: inline-block;
            width: 80%;
            height: 120px;
            margin: 10px 10%;
            background-size: cover;
            background-image: url('uni-img.jpg');
        }

        #uni-img-2 {
            display: inline-block;
            width: 80%;
            height: 120px;
            margin: 10px 10%;
            background-image: url('uni-img-1.jpg');
            background-size: cover;
        }


        .fur {
            display: inline-block;
            background-color: wheat;
            width: 90%;
            height: 280px;
            padding: 30px 5% 30px 5%;
        }

        .fur>p {
            font-weight: 500;
            color: #95caca;
            font-family: 'Times New Roman', Times, serif;
            font-size: 90px;

        }

        .like {
            background-color: yellow;
            width: 80%;
            height: 1000px;
            margin: 20px 10%;
        }

        .footer {
            background-color: aliceblue;
            width: 100%;
            height: 400px;
            margin: 10px auto;
        }
    </style>
</head>

<body>
    <div class="header">
        <div id="menu">
            <h3>About Us</h3>
        </div>
        <div id="front-header">
            <div class="header-img">

            </div>

        </div>

    </div>
    <div id="divid">
        <b>About my study...</b>
    </div>
    <div class="content">
        <div class="per-inf">
            <div class="chapter-1">
                <div id="divid-1"></div>
                <div id="infor">
                    <table>
                        <tr>
                            <td><b>
                                    <div class="chapter-font">Name：
                                </b></td>
                            <td><b>
                                    <div class="chapter-font">Joyce Zhao
                                </b></td>
                        </tr>
                        <h3>
                            <tr>
                                <td><b>Gender：</b></td>
                                <td><b>F</b></td>
                            </tr>
                            <tr>
                                <td><b>Age：</b></td>
                                <td><b>19</b></td>
                            </tr>
                            <tr>
                                <td><b>Tel:</b></td>
                                <td><b>159XXXX2696</b></td>
                            </tr>
                            <tr>
                                <td><b>Email:</b></td>
                                <td><b>zhiyi_joyce@163.com</b></td>
                            </tr>
                        </h3>
                    </table>
                </div>
            </div>
            <div class="chapter-2">
                <p><strong>
                        <h1>The</h1>
                    </strong> world is full of evil and lies and pain and death
                    and you can't hide from it you can only face it.
                    <br />The question is, when you do, how do you respond?
                    <br />Who do you become?
                </p>

            </div>

        </div>
        <div class="school">
            <div class="five-part">
                <div class="divid-five">
                    <div class="container"><b>Primary<br /> School:</b><br>
                        <br />Primary School Attach to Yunnan Normal University</div>
                </div>
                <div class="divid-five">
                    <div class="container"><b>Junior High<br /> School:</b><br>
                        <br />Yunnan University Secondary School</div>
                </div>
                <div class="divid-five">
                    <div class="container"><b>Middle<br /> School:</b><br>
                        <br />The High School Affiliated to Yunnan Normal University</div>
                </div>
                <div class="divid-five">
                    <div class="container"><b>University:</b><br>
                        <br />Shanghai University of International Business and Economic </div>
                </div>
                <div class="divid-five">
                    <div class="container"><b>Master:</b><br>
                        <br />Continue.........</div>
                </div>

            </div>

            <div class="mid-2">
                <div class="mid-2-1">
                    <div id="mid-job">
                        <p id="mid-sch-name">Middle School:</p>

                        <div class="left-part"></div>
                        <div class="right-part">
                            <p>
                                <h1>高中时期:</h1>
                            </p>
                        </div>
                    </div>
                </div>
                <div id="mid-poster">
                </div>
            </div>
            <div class="uni">
                <div class="uni-left">
                    <div id="uni-name">
                        <p><h1>University</h1></p>
                        <p><h3>Shanghai University <br>of International Business and Economic</h2></p>
                    </div>
                    <div id="uni-text">
                        <p><b>学生会</b></p>
                        <li>上海对外经贸大学校学生会外联部</li>
                        <li>上海对外经贸大学统计与信息学院学生会外联部</li>
                        <p><b>校射箭队</b></p>
                        <li>校反曲队队员
                    </div>
                </div>
                <div class="uni-right">
                    <div id="uni-img-1">
                    </div>
                    <div id="uni-img-2"></div>
                </div>

            </div>
            <div class="fur">
                <p>Continue...</p>
            </div>
        </div>

        <div id="divid">
            <b>About my life...</b>
        </div>
        <div class="like">

        </div>

    </div>
    <div class="footer">

    </div>
</body>

</html>

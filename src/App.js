import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top"></div>
      {/* Header Section */}
      <header className="App-header">
        <nav className="navbar">
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero">
          <h1>I am Casey Holden</h1>
          <h2> I a ... at ...</h2>
        </div>
      </header>


      {/* Home Section */}
      <section id="home">
        <h1>Home</h1>
        <p>Welcome to my website!</p>
      </section>

        {/* About Section */}
      <section id="about">
        <h1>About</h1>
        <p>My name is Casey.</p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h1>Projects</h1>
        <p>Here are some of my projects</p>
        
      Experimental Network Project
Goal
Using a dataset of brain CT images provided by a company called Zeta Surgical, we will develop models to accurately classify and segment brain hemorrhages in these CT images.

Zeta Surgical
A company focused on democratizing the access to accurate, safe and fast image guidance, to unlock the use of image guidance directly at the point-of-care, and to enable new treatments in cases such as emergencies and bedside precedure.

Example CT image with hemorrhage

The CT Image Data Set
512x512 CT image scans labeled with locatiions of the hemorrhage in the brain and pixel coordinates of the outline of the hemorrhage.

Types of CT hemorrhages
Attempt 1: Standard Neural Network
Small-scale first attempt
200 of each type of hemorrhaging
Using sequential keras model
Standard Neural Network Results
Attempt 2: Visual Transformer
This did not work...

Attempt 3: Transfer Learning - VGG16
VGG16 is a convolutional neural network model proposed by K. Simonyan and A. Zisserman from the University of Oxford in the paper "Very Deep Concolutional Networks for Large-Scale Image Recognition".

VGG16
VGG16 VGG16
Attempt 4: Transfer Learning - ResNet
A convolutional neural network model with a residual block

ResNet ResNet
ResNet ResNet
Main Takeaways
Our fourth attempt produced the best results for our data set, with a good accuracy of about 55-60% and no over fitting issues with the ResNet model.
Despite the improved results seen with ResNet, accuracy was still below 60% which is not ideal for a medical implementation.
Medical data is very difficult to apply current machine learning methods on, and more development is required in this area before we can begin to see reliable results.
We are also restricted by the processing power of our computers as processing even fairly small amounts of this data was slow.
Future implementation
Transfer learning on MedNet: Sihong Chen, Kai Ma, Yefeng Zheng: “Med3D: Transfer Learning for 3D Medical Image Analysis”, 2019; [http://arxiv.org/abs/1904.00625 arXiv:1904.00625].
Federated Learning with distributed updates: J. Zhao et al., "Federated Learning With Heterogeneity-Aware Probabilistic Synchronous Parallel on Edge," in IEEE Transactions on Services Computing, vol. 15, no. 2, pp. 614-626, 1 March-April 2022, doi: 10.1109/TSC.2021.3109910.

Experimental Network Project
Goal
Using a dataset of brain CT images provided by a company called Zeta Surgical, we will develop models to accurately classify and segment brain hemorrhages in these CT images.

Zeta Surgical
A company focused on democratizing the access to accurate, safe and fast image guidance, to unlock the use of image guidance directly at the point-of-care, and to enable new treatments in cases such as emergencies and bedside precedure.

Example CT image with hemorrhage

The CT Image Data Set
512x512 CT image scans labeled with locatiions of the hemorrhage in the brain and pixel coordinates of the outline of the hemorrhage.

Types of CT hemorrhages
Attempt 1: Standard Neural Network
Small-scale first attempt
200 of each type of hemorrhaging
Using sequential keras model
Standard Neural Network Results
Attempt 2: Visual Transformer
This did not work...

Attempt 3: Transfer Learning - VGG16
VGG16 is a convolutional neural network model proposed by K. Simonyan and A. Zisserman from the University of Oxford in the paper "Very Deep Concolutional Networks for Large-Scale Image Recognition".

VGG16
VGG16 VGG16
Attempt 4: Transfer Learning - ResNet
A convolutional neural network model with a residual block

ResNet ResNet
ResNet ResNet
Main Takeaways
Our fourth attempt produced the best results for our data set, with a good accuracy of about 55-60% and no over fitting issues with the ResNet model.
Despite the improved results seen with ResNet, accuracy was still below 60% which is not ideal for a medical implementation.
Medical data is very difficult to apply current machine learning methods on, and more development is required in this area before we can begin to see reliable results.
We are also restricted by the processing power of our computers as processing even fairly small amounts of this data was slow.
Future implementation
Transfer learning on MedNet: Sihong Chen, Kai Ma, Yefeng Zheng: “Med3D: Transfer Learning for 3D Medical Image Analysis”, 2019; [http://arxiv.org/abs/1904.00625 arXiv:1904.00625].
Federated Learning with distributed updates: J. Zhao et al., "Federated Learning With Heterogeneity-Aware Probabilistic Synchronous Parallel on Edge," in IEEE Transactions on Services Computing, vol. 15, no. 2, pp. 614-626, 1 March-April 2022, doi: 10.1109/TSC.2021.3109910.

Experimental Network Project
Goal
Using a dataset of brain CT images provided by a company called Zeta Surgical, we will develop models to accurately classify and segment brain hemorrhages in these CT images.

Zeta Surgical
A company focused on democratizing the access to accurate, safe and fast image guidance, to unlock the use of image guidance directly at the point-of-care, and to enable new treatments in cases such as emergencies and bedside precedure.

Example CT image with hemorrhage

The CT Image Data Set
512x512 CT image scans labeled with locatiions of the hemorrhage in the brain and pixel coordinates of the outline of the hemorrhage.

Types of CT hemorrhages
Attempt 1: Standard Neural Network
Small-scale first attempt
200 of each type of hemorrhaging
Using sequential keras model
Standard Neural Network Results
Attempt 2: Visual Transformer
This did not work...

Attempt 3: Transfer Learning - VGG16
VGG16 is a convolutional neural network model proposed by K. Simonyan and A. Zisserman from the University of Oxford in the paper "Very Deep Concolutional Networks for Large-Scale Image Recognition".

VGG16
VGG16 VGG16
Attempt 4: Transfer Learning - ResNet
A convolutional neural network model with a residual block

ResNet ResNet
ResNet ResNet
Main Takeaways
Our fourth attempt produced the best results for our data set, with a good accuracy of about 55-60% and no over fitting issues with the ResNet model.
Despite the improved results seen with ResNet, accuracy was still below 60% which is not ideal for a medical implementation.
Medical data is very difficult to apply current machine learning methods on, and more development is required in this area before we can begin to see reliable results.
We are also restricted by the processing power of our computers as processing even fairly small amounts of this data was slow.
Future implementation
Transfer learning on MedNet: Sihong Chen, Kai Ma, Yefeng Zheng: “Med3D: Transfer Learning for 3D Medical Image Analysis”, 2019; [http://arxiv.org/abs/1904.00625 arXiv:1904.00625].
Federated Learning with distributed updates: J. Zhao et al., "Federated Learning With Heterogeneity-Aware Probabilistic Synchronous Parallel on Edge," in IEEE Transactions on Services Computing, vol. 15, no. 2, pp. 614-626, 1 March-April 2022, doi: 10.1109/TSC.2021.3109910.

Experimental Network Project
Goal
Using a dataset of brain CT images provided by a company called Zeta Surgical, we will develop models to accurately classify and segment brain hemorrhages in these CT images.

Zeta Surgical
A company focused on democratizing the access to accurate, safe and fast image guidance, to unlock the use of image guidance directly at the point-of-care, and to enable new treatments in cases such as emergencies and bedside precedure.

Example CT image with hemorrhage

The CT Image Data Set
512x512 CT image scans labeled with locatiions of the hemorrhage in the brain and pixel coordinates of the outline of the hemorrhage.

Types of CT hemorrhages
Attempt 1: Standard Neural Network
Small-scale first attempt
200 of each type of hemorrhaging
Using sequential keras model
Standard Neural Network Results
Attempt 2: Visual Transformer
This did not work...

Attempt 3: Transfer Learning - VGG16
VGG16 is a convolutional neural network model proposed by K. Simonyan and A. Zisserman from the University of Oxford in the paper "Very Deep Concolutional Networks for Large-Scale Image Recognition".

VGG16
VGG16 VGG16
Attempt 4: Transfer Learning - ResNet
A convolutional neural network model with a residual block

ResNet ResNet
ResNet ResNet
Main Takeaways
Our fourth attempt produced the best results for our data set, with a good accuracy of about 55-60% and no over fitting issues with the ResNet model.
Despite the improved results seen with ResNet, accuracy was still below 60% which is not ideal for a medical implementation.
Medical data is very difficult to apply current machine learning methods on, and more development is required in this area before we can begin to see reliable results.
We are also restricted by the processing power of our computers as processing even fairly small amounts of this data was slow.
Future implementation
Transfer learning on MedNet: Sihong Chen, Kai Ma, Yefeng Zheng: “Med3D: Transfer Learning for 3D Medical Image Analysis”, 2019; [http://arxiv.org/abs/1904.00625 arXiv:1904.00625].
Federated Learning with distributed updates: J. Zhao et al., "Federated Learning With Heterogeneity-Aware Probabilistic Synchronous Parallel on Edge," in IEEE Transactions on Services Computing, vol. 15, no. 2, pp. 614-626, 1 March-April 2022, doi: 10.1109/TSC.2021.3109910.

      </section>


      {/* Footer Section */}
      <footer>
        <p>Casey's Portfolio</p>
      </footer>
      <p>      </p>
    </div>
  );
}

export default App;

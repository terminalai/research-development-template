# ML Research Project Template

This template is designed to help you with your research projects. In addition to the basic python code you would see in a generic project, I have also added development and production sections, including app development and web development.

In a more generic sense, a ML Research Project goes through 3 real components (shown in the form of a repository structure):

- [**`research`**](./research), wherein students perform exploratory data analyses, cleaning, model prototyping and simple experimentation and exploration. This is very likely done in the context of a notebook (eg Jupyter Notebook). This formally represents the data science lifecycle up till the data exploration section (i.e. acquisition, cleaning and exploration of data).

  - **[`preprocessing`](./research/preprocessing)** (Python): Data Acquisition and Cleaning location.

  - **[`exploration`](./research/exploration)** (Python): A huge report-esque mini-research project.
  - [**`pipeline`**](./research/pipeline) (Python): A simple machine learning template.
  - [**`modelling`**](./research/modelling) (Python): A simple modelling section with some customized directories.
    - [**`algorithms`**](./research/modelling/algorithms): A set of tools from many tasks in Machine Learning.
    - [**`classification`**](./research/modelling/classification) and [**`regression`**](./research/modelling/regression): A set of templates for classification and regression tasks.
    - [**`deep-learning`**](./research/modelling/deep-learning): A specialised environment for general Deep Learning (DL) projects.
    - [**`pytorch`**](./research/modelling/pytorch): An environment designed for any project done in PyTorch.

- [**`production`**](./production), where researchers use the prototyped models and fully train them. Since such models require a lot of usage of RAM etc, this is often done with the help of GPUs. Hence, distilled utils lib, training job and inference service are implemented here. The production-ready solution(s) are composed of libraries, services, and jobs.

  - **[`python-utils-lib`](./production/python-utils-lib)** (Python): Utility functions that are distilled from the research phase and used across multiple scripts. Should only contain refactored and tested Python scripts/modules. Installable via pip.
  - **[`training-job`](./production/training-job)** (Python/Docker): Combines required data exports, preprocessing and training scripts into a Docker container. This makes results reproducible and the production model retrainable in _any_ ennvironment.
  - **[`inference-service`](./production/inference-service)** (Python/Docker): Docker container that provides the final model prediction capabilities via a REST API.

- [**`development`**](./development), where researchers often utilise software development strategies in a truly ML4SE-like system to visualise and utilise their results. Applications on the web, desktop or mobile are often preferred, and this repository contains many templates for such development. Often, Streamlit is also used as a substitute to simply model information rather than creating a full-fledged application. Due to the complexity of these submodules, I have chosen to leave them as an exercise to the reader.

It is recommended to simply clone this repo and customize it to the specific use-case at hand. Delete appropriate directories please!

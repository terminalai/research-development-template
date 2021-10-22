# ML Research Project Template

This template is designed to help you with your research projects. In addition to the basic python code you would see in a generic project, I have also added development and production sections, including app development and web development.

In a more generic sense, a ML Research Project goes through 3 real components:

- **research**, wherein students perform exploratory data analyses, cleaning, model prototyping and simple experimentation and exploration. This is very likely done in the context of a notebook (eg Jupyter Notebook). This formally represents the data science lifecycle up till the data exploration section (i.e. acquisition, cleaning and exploration of data).
- **production**, where researchers use the prototyped models and fully train them. Since such models require a lot of usage of RAM etc, this is often done with the help of GPUs.
- **development**, where researchers often utilise software development strategies in a truly ML4SE-like system to visualise and utilise their results. Applications on the web, desktop or mobile are often preferred, and this repository contains many templates for such development. Often, Streamlit is also used as a substitute to simply model information rather than creating a full-fledged application.



- [`research`](./research): exploratory data analyses, model prototyping and experiments are dumped here in a structured way
- [`production`](./production): distilled utils lib, training job and inference service are implemented here

It is recommended to simply clone this repo and customize it to the specific use-case at hand.

---

## Repository Structure

- **[research](./research)**: Scripts and Notebooks for experimentation.
  - **[develop](./research/develop)** (Python): Experimental code to try out new ideas and experiments. Use Jupyter notebooks wherever you can. Naming convention: `YYYY-MM-DD_userid_short-description`. If you cannot use a notebook and have multiple scripts/files for an experiment, create a folder with the same naming convention. Each file should be handled by one person only.
  - **[deliver](./research/deliver)** (Python): Refactored notebooks that contain valuable insights or results (e.g. visualizations, training runs). Notebooks should be refactored, documented, contain outputs, and use the following naming schema: `YYYY-MM-DD_short-description`. Notebooks in deliver should not be changed or rerun. If you want to rerun a deliver Notebook, please duplicate it into the develop folder.
  - **[templates](./research/templates)** (Python): Refactored Notebooks that are reusable for a specific task (e.g. model training, data exploration). Notebooks should be refactored, documented, not contain any output, and use the following naming schema: `short-description`. If you like to make use of a template Notebook, duplicate the notebook into develop folder.
- **[production](./production)**: The production-ready solution(s) composed of libraries, services, and jobs.
  - **[python-utils-lib](./production/python-utils-lib)** (Python): Utility functions that are distilled from the research phase and used across multiple scripts. Should only contain refactored and tested Python scripts/modules. Installable via pip.
  - **[training-job](./production/training-job)** (Python/Docker): Combines required data exports, preprocessing and training scripts into a Docker container. This makes results reproducible and the production model retrainable in _any_ ennvironment.
  - **[inference-service](./production/inference-service)** (Python/Docker): Docker container that provides the final model prediction capabilities via a REST API.

## Naming Conventions

### Code Artifacts

- develop notebooks/scripts: `YYYY-MM-DD_userid_short-description`
- deliver notebooks/scripts: `YYYY-MM-DD_short-description`
- template notebooks/scripts: `short-description`
- services: `-service` suffix
- jobs: `-job` suffix
- libraries: `-lib` suffix

### Files

`<dataset-desc>_<preprocessing-desc>_<training-desc>.<filetype>`

#### Examples:

- `blogs-metadata.csv`
- `blogs-metadata_cl-rs_ft-vec.vectors`
- `categories2blogs_cl-rs-lm_tfidf-lsvm.model.zip`
- `categories2blogs-questions_cl-rs-lm_tfidf-lsvm.model.zip`

#### Name Identifier Descriptions: 

<table>
    <tr>
        <th>Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td colspan="2"><b>Dataset Identifiers:</b></td>
    </tr>
    <tr>
        <td>categories2blogs</td>
        <td>Dataset containing blogs with the text content, blogs item URI, and connected primary tags.</td>
    </tr>
    <tr>
        <td>blogs-metadata</td>
        <td>Dataset containing all blogs and related metadata (properties).</td>
    </tr>
    <tr>
        <td colspan="2"><b>Preprocessing Identifiers:</b></td>
    </tr>
     <tr>
        <td>cl</td>
        <td>Default text cleaning (lowercasing, regex cleaning).</td>
    </tr>
    <tr>
        <td>rs</td>
        <td>Remove Stopwords.</td>
    </tr>
    <tr>
        <td>lm</td>
        <td>Text lemmatization.</td>
    </tr>
    <tr>
        <td colspan="2"><b>Training Identifiers:</b></td>
    </tr>
    <tr>
        <td>ft-vec</td>
        <td>Text vectorizer using Fasttext.</td>
    </tr>
    <tr>
        <td>tfidf</td>
        <td>Text vectorizer using TFIDF.</td>
    </tr>
    <tr>
        <td>lsvm</td>
        <td>Classifier using linear SVM.</td>
    </tr>
    <tr>
        <td colspan="2"><b>Filetype Identifiers:</b></td>
    </tr>
    <tr>
        <td>.model</td>
        <td>Model file.</td>
    </tr>
    <tr>
        <td>.vectors</td>
        <td>Binary vectors file.</td>
    </tr>
</table>
